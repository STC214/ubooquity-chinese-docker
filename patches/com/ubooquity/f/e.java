package com.ubooquity.f;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.RenderingHints;
import java.awt.Transparency;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import javax.imageio.ImageIO;

public class e {
    private static final double LANDSCAPE_CROP_THRESHOLD = 1.15D;
    private static final int SAMPLE_STEP = 8;

    public e() {
    }

    public static BufferedImage a(BufferedImage image, int targetWidth, int targetHeight) {
        if (image == null || targetWidth <= 0 || targetHeight <= 0) {
            return image;
        }

        double targetRatio = (double) targetWidth / (double) targetHeight;
        double sourceRatio = (double) image.getWidth() / (double) image.getHeight();
        if (sourceRatio > targetRatio * LANDSCAPE_CROP_THRESHOLD) {
            image = cropLandscapeCoverCandidate(image, targetRatio);
            return resize(image, targetWidth, targetHeight, RenderingHints.VALUE_INTERPOLATION_BICUBIC, true);
        }

        int resizedWidth;
        int resizedHeight;
        if (sourceRatio < targetRatio) {
            resizedHeight = targetHeight;
            resizedWidth = Math.round((float) targetHeight * (float) sourceRatio);
        } else {
            resizedWidth = targetWidth;
            resizedHeight = Math.round((float) targetWidth / (float) sourceRatio);
        }
        return resize(image, resizedWidth, resizedHeight, RenderingHints.VALUE_INTERPOLATION_BICUBIC, true);
    }

    public static BufferedImage a(BufferedImage image, int targetWidth) {
        if (image == null || targetWidth <= 0) {
            return image;
        }
        int targetHeight = Math.max(1, image.getHeight() * targetWidth / image.getWidth());
        return resize(image, targetWidth, targetHeight, RenderingHints.VALUE_INTERPOLATION_BICUBIC, true);
    }

    public static List<Image> a() throws IOException {
        e loader = new e();
        List<Image> icons = new ArrayList<Image>();
        icons.add(readResource(loader, "/icon-256.png"));
        icons.add(readResource(loader, "/icon-128.png"));
        icons.add(readResource(loader, "/icon-64.png"));
        icons.add(readResource(loader, "/icon-48.png"));
        icons.add(readResource(loader, "/icon-32.png"));
        icons.add(readResource(loader, "/icon-16.png"));
        return icons;
    }

    public static boolean a(String path) {
        path = path.toLowerCase();
        if (path.contains("__macosx")) {
            return false;
        }
        return path.endsWith(".jpg") || path.endsWith(".jpeg") || path.endsWith(".png")
                || path.endsWith(".gif") || path.endsWith(".webp");
    }

    public static BufferedImage a(BufferedImage image) {
        if (image != null && (image.getType() == BufferedImage.TYPE_4BYTE_ABGR
                || image.getType() == BufferedImage.TYPE_BYTE_INDEXED
                || image.getColorModel().hasAlpha())) {
            BufferedImage flattened = new BufferedImage(image.getWidth(), image.getHeight(), BufferedImage.TYPE_INT_RGB);
            Graphics graphics = flattened.getGraphics();
            graphics.drawImage(image, 0, 0, Color.WHITE, null);
            graphics.dispose();
            image = flattened;
        }
        return image;
    }

    private static BufferedImage cropLandscapeCoverCandidate(BufferedImage image, double targetRatio) {
        int cropWidth = Math.min(image.getWidth(), Math.max(1, (int) Math.round(image.getHeight() * targetRatio)));
        int rightX = image.getWidth() - cropWidth;
        int centerX = Math.max(0, (image.getWidth() - cropWidth) / 2);

        double leftScore = scoreRegion(image, 0, 0, cropWidth, image.getHeight());
        double rightScore = scoreRegion(image, rightX, 0, cropWidth, image.getHeight());
        double centerScore = scoreRegion(image, centerX, 0, cropWidth, image.getHeight());

        int cropX = leftScore >= rightScore ? 0 : rightX;
        double sideScore = Math.max(leftScore, rightScore);
        if (centerScore > sideScore * 1.18D) {
            cropX = centerX;
        }
        return image.getSubimage(cropX, 0, cropWidth, image.getHeight());
    }

    private static double scoreRegion(BufferedImage image, int x, int y, int width, int height) {
        double colorfulness = 0.0D;
        double edgeEnergy = 0.0D;
        double brightnessBalance = 0.0D;
        int samples = 0;
        int previousLuma = -1;

        int step = Math.max(SAMPLE_STEP, Math.min(width, height) / 64);
        for (int py = y; py < y + height; py += step) {
            previousLuma = -1;
            for (int px = x; px < x + width; px += step) {
                int rgb = image.getRGB(px, py);
                int red = (rgb >> 16) & 255;
                int green = (rgb >> 8) & 255;
                int blue = rgb & 255;
                int max = Math.max(red, Math.max(green, blue));
                int min = Math.min(red, Math.min(green, blue));
                int luma = (red * 299 + green * 587 + blue * 114) / 1000;

                colorfulness += max - min;
                brightnessBalance += 255 - Math.abs(128 - luma) * 2;
                if (previousLuma >= 0) {
                    edgeEnergy += Math.abs(luma - previousLuma);
                }
                previousLuma = luma;
                samples++;
            }
        }

        if (samples == 0) {
            return 0.0D;
        }
        return colorfulness / samples + edgeEnergy / samples * 0.7D + brightnessBalance / samples * 0.15D;
    }

    private static BufferedImage resize(BufferedImage image, int targetWidth, int targetHeight, Object interpolation, boolean progressive) {
        int imageType = image.getTransparency() == Transparency.OPAQUE ? BufferedImage.TYPE_INT_RGB : BufferedImage.TYPE_INT_ARGB;
        BufferedImage current = image;
        int width = progressive && image.getWidth() > targetWidth ? image.getWidth() : targetWidth;
        int height = progressive && image.getHeight() > targetHeight ? image.getHeight() : targetHeight;

        do {
            if (progressive && width > targetWidth) {
                width = Math.max(targetWidth, width / 2);
            }
            if (progressive && height > targetHeight) {
                height = Math.max(targetHeight, height / 2);
            }

            BufferedImage resized = new BufferedImage(width, height, imageType);
            Graphics2D graphics = resized.createGraphics();
            graphics.setRenderingHint(RenderingHints.KEY_INTERPOLATION, interpolation);
            graphics.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
            graphics.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            graphics.drawImage(current, 0, 0, width, height, null);
            graphics.dispose();
            current = resized;
        } while (width != targetWidth || height != targetHeight);

        return current;
    }

    private static BufferedImage readResource(e loader, String path) throws IOException {
        URL resource = loader.getClass().getResource(path);
        return ImageIO.read(resource);
    }
}
