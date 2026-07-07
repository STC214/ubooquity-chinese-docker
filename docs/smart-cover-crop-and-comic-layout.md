# Smart Cover Crop And Comic Layout Notes

This document records the 2026-07-07 backend jar patch and the remote comic
library cleanup. It is intentionally concise so future maintenance can confirm
what changed without reverse-engineering the jar again.

## Smart cover crop

Patched jar:

```text
Ubooquity.jar
```

Patch source kept in the repo:

```text
patches/com/ubooquity/f/e.java
```

Jar class replaced:

```text
com/ubooquity/f/e.class
```

Behavior:

- For landscape images wider than the configured cover ratio, the code scores
  left, right, and sometimes center crop candidates.
- The score uses colorfulness, horizontal edge energy, and brightness balance.
- The selected crop is taken from the original image with `getSubimage`.
- The selected crop is then resized once toward the target cover size using
  bicubic interpolation and progressive downscaling.

This avoids the old failure mode where a landscape thumbnail was generated
first and then visually stretched or center-cropped by the frontend, producing
blurry or mosaic-like covers.

Known limit: if the original source page is already lower resolution than the
target thumbnail, the result can still be soft because the image must be
upscaled.

## Deployment record

Remote host:

```text
192.168.13.1
```

Container:

```text
L_ubooquity
```

Jar path in container:

```text
/app/ubooquity/Ubooquity.jar
```

Deployment verification from 2026-07-07:

```text
SHA256: 8310a8dd0243c351c7039846f170ea3e61deec7672196d5ad267ca35f4a7318d
Remote backup: /tmp/Ubooquity.container-before-smart-cover-20260707-124733.jar
```

After replacing the jar, the service started successfully and logged:

```text
Internal server started. Listening on port 2202 (library) and 2203 (admin)
```

Do not store router credentials in this repository.

## Comic library cleanup

Remote comic root:

```text
/mnt/sdb1/SHOTA/COMIC
```

Before the final reorganization, two `.zip` archives were renamed to `.cbz`,
and two `.pdf` files were moved to:

```text
/mnt/sdb1/SHOTA/COMIC/PDF
```

The final organization rule was:

```text
9 folders per month
24 comic files per folder
```

The script sorted the current year-directory `.cbz` files by path order and
moved them into this structure:

```text
YEAR/YEARSQ/YYYYMM/YYYYMMNN/file.cbz
```

Example:

```text
2026/2026S4/202612/20261204
```

Final verification:

```text
CBZ count: 30984
Last filled folder: /mnt/sdb1/SHOTA/COMIC/2026/2026S4/202612/20261204
Files in last folder: 24/24
Structure violations: 0
Months with more than 9 folders: 0
Folders with more than 24 files: 0
Empty year subdirectories after cleanup: 0
Empty directories removed during cleanup: 423
```

Move manifest retained on the router:

```text
/mnt/sdb1/SHOTA/COMIC/.reorg-manifests/reorg-9x24-20260707-132134.tsv
```

There were 44 duplicate destination filenames. Those files were kept and given
`__dupN` suffixes to avoid overwrites.

The only non-`.cbz` file left under pure year directories after cleanup was:

```text
/mnt/sdb1/SHOTA/COMIC/2017/MD5Key.txt
```

Run a Ubooquity library scan after directory reorganization so the UI reflects
the new layout.
