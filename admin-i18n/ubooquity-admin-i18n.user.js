// ==UserScript==
// @name         Ubooquity Admin Chinese Layer
// @namespace    local.ubooquity.trans
// @version      0.3.0
// @description  Chinese text replacement and UI polish for Ubooquity admin pages.
// @match        http://*/admin*
// @match        https://*/admin*
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";

  const TEXT_MAP = [
    ["Administration", "管理后台"],
    ["Administration page", "管理页面"],
    ["Not connected to the server", "未连接到服务器"],
    ["General", "常规"],
    ["Advanced", "高级"],
    ["Content scan", "内容扫描"],
    ["Automatic scan period:", "自动扫描周期："],
    ["Scan collection at launch", "启动时扫描书库"],
    ["Launch new scan", "立即开始新扫描"],
    ["Theme", "主题"],
    ["Create new theme", "新建主题"],
    ["Choose the name of the new theme", "输入新主题名称"],
    ["Cannot create theme with empty name", "主题名称不能为空"],
    ["Library", "书库"],
    ["Libraries", "书库"],
    ["Shared folders", "共享文件夹"],
    ["Books", "图书"],
    ["Comics", "漫画"],
    ["Files", "文件"],
    ["Activate raw files sharing module (any type of file)", "启用原始文件共享模块（支持任意文件类型）"],
    ["Folder", "文件夹"],
    ["Folders", "文件夹"],
    ["Root folders", "根目录"],
    ["Users", "用户"],
    ["User", "用户"],
    ["Username", "用户名"],
    ["User creation", "创建用户"],
    ["Password", "密码"],
    ["Repeat password", "重复密码"],
    ["Current password", "当前密码"],
    ["New password", "新密码"],
    ["Choose password", "设置密码"],
    ["Choose administrator password", "设置管理员密码"],
    ["Change password", "修改密码"],
    ["Login", "登录"],
    ["Log in", "登录"],
    ["Logout", "退出登录"],
    ["Sign out", "退出登录"],
    ["Save", "保存"],
    ["Save and restart", "保存并重启"],
    ["Failed to save configuration.", "保存配置失败。"],
    ["Discard changes", "放弃更改"],
    ["Confirm discard", "确认放弃更改"],
    ["Discard changes and reload configuration from server ?", "放弃更改并从服务器重新加载配置？"],
    ["Cancel", "取消"],
    ["Delete", "删除"],
    ["Remove", "移除"],
    ["Add", "添加"],
    ["Add folder...", "添加文件夹..."],
    ["Add folder", "添加文件夹"],
    ["New", "新建"],
    ["Edit", "编辑"],
    ["Settings", "设置"],
    ["Preferences", "首选项"],
    ["Enabled", "已启用"],
    ["Disabled", "已禁用"],
    ["Enable", "启用"],
    ["Disable", "禁用"],
    ["Start", "开始"],
    ["Stop", "停止"],
    ["Restart", "重启"],
    ["Restart server", "重启服务器"],
    ["Refresh", "刷新"],
    ["Search", "搜索"],
    ["Description", "说明"],
    ["Path", "路径"],
    ["Directory", "目录"],
    ["Title", "标题"],
    ["Author", "作者"],
    ["Series", "系列"],
    ["Tags", "标签"],
    ["Language", "语言"],
    ["Cover", "封面"],
    ["Status", "状态"],
    ["Name", "名称"],
    ["Value", "值"],
    ["Required", "必填"],
    ["Optional", "可选"],
    ["Yes", "是"],
    ["No", "否"],
    ["On", "开"],
    ["Off", "关"],
    ["Browse", "浏览"],
    ["Open", "打开"],
    ["Close", "关闭"],
    ["Apply", "应用"],
    ["Apply changes", "应用更改"],
    ["Upload", "上传"],
    ["Download", "下载"],
    ["Preview", "预览"],
    ["Remote admin", "远程管理"],
    ["Allow remote administration", "允许远程管理"],
    ["Allow remote scan triggering using secret API key", "允许使用密钥远程触发扫描"],
    ["Allow remote shutdown using secret API key", "允许使用密钥远程关机"],
    ["Regenerate key", "重新生成密钥"],
    ["KeyStore", "密钥库"],
    ["KeyStore password", "密钥库密码"],
    ["Book cover", "书籍封面"],
    ["Comic cover", "漫画封面"],
    ["Scan library", "扫描书库"],
    ["Scan now", "立即扫描"],
    ["Scan directories", "扫描目录"],
    ["Advanced settings", "高级设置"],
    ["Enable OPDS feed", "启用 OPDS 订阅源"],
    ["Bypass single root folder", "绕过单一根文件夹"],
    ["Enable folder metadata display", "启用文件夹元数据显示"],
    ["Display title from metadata instead of file name", "使用元数据标题而不是文件名"],
    ["Do not remove data from unreachable folders", "不要移除不可达文件夹中的数据"],
    ["Identify and log duplicate files after scan", "扫描后识别并记录重复文件"],
    ["Activate debug mode", "启用调试模式"],
    ["Scan exclusion pattern", "扫描排除模式"],
    ["The administration page will open in your browser", "管理页面会在浏览器中打开"],
    ["click on the Library section", "点击书库部分"],
    ["click on the Add folder button", "点击添加文件夹按钮"],
    ["click on the Save and restart button", "点击保存并重启按钮"],
    ["Database clearing confirmation", "清空数据库确认"],
    ["Books data stored by Ubooquity will be cleared (without affecting your files).<br>A full rescan of your books will be done.<br> Do you want to continue ?", "Ubooquity 存储的书籍数据将被清空，但不会影响你的文件。<br>系统会重新完整扫描书库。<br>是否继续？"],
    ["Confirm user deletion", "确认删除用户"],
    ["Do you want to delete user ", "是否删除用户 "],
    ["User name and password cannot be empty", "用户名和密码不能为空"],
    ["already exists", "已存在"],
    ["Stop sharing this folder ?", "停止共享这个文件夹？"],
    ["Choose a folder to share", "选择要共享的文件夹"],
    ["Choose authorized users", "选择允许访问的用户"],
    ["Ubooquity Help", "Ubooquity 帮助"],
    ["Help", "帮助"],
    ["Close", "关闭"],
    ["Share folder", "共享文件夹"],
    ["Cancel", "取消"],
    ["Done", "完成"],
    ["Update password", "更新密码"],
    ["Folder shared: ", "已共享文件夹："],
    ["ERROR: folder already shared or containing an already shared folder", "错误：该文件夹已共享，或包含已共享的文件夹"],
    ["Folder category", "文件夹分类"],
    ["Category", "分类"],
    ["Folder is a Calibre library", "该文件夹是 Calibre 书库"],
    ["(Calibre library)", "（Calibre 书库）"],
    ["Shared folders", "共享文件夹"],
    ["Status", "状态"],
    ["Last scan:", "上次扫描："],
    ["Current operation:", "当前操作："],
    ["Added/updated:", "新增/更新："],
    ["Removed:", "已移除："],
    ["Theme creation", "主题创建"],
    ["Cannot create theme with empty name", "主题名称不能为空"],
    ["Failed to save configuration.", "保存配置失败。"],
    ["confirm", "确认"],
    ["discard", "放弃"],
    ["new password", "新密码"],
    ["repeat password", "重复密码"],
  ];

  const ATTR_MAP = [
    ["Search", "搜索"],
    ["Password", "密码"],
    ["Username", "用户名"],
    ["Name", "名称"],
    ["Title", "标题"],
    ["Save", "保存"],
    ["Cancel", "取消"],
    ["Help", "帮助"],
    ["Close", "关闭"],
    ["Delete", "删除"],
    ["Edit", "编辑"],
    ["Users", "用户"],
  ];

  const STYLE = `
    :root {
      color-scheme: dark;
    }

    html, body {
      background: linear-gradient(160deg, #050b14 0%, #07111d 45%, #0b1320 100%) !important;
      color: #ecf4ff !important;
      font-family: "Source Han Sans SC", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif !important;
    }

    body {
      padding: 12px !important;
    }

    table, .panel, .container, .box, .card, .section, .content, .content-wrapper {
      background: rgba(8, 16, 28, 0.88) !important;
      color: #ecf4ff !important;
      border-color: rgba(154, 176, 201, 0.16) !important;
      box-shadow: 0 18px 50px rgba(0, 0, 0, 0.32) !important;
      border-radius: 16px !important;
    }

    a, button, input, select, textarea {
      font-family: inherit !important;
    }

    button, .btn, input[type="submit"], input[type="button"] {
      background: linear-gradient(135deg, rgba(130, 212, 255, 0.26), rgba(159, 140, 255, 0.22)) !important;
      color: #ecf4ff !important;
      border: 1px solid rgba(130, 212, 255, 0.26) !important;
      border-radius: 999px !important;
    }

    input, select, textarea {
      background: rgba(13, 26, 43, 0.95) !important;
      color: #ecf4ff !important;
      border: 1px solid rgba(154, 176, 201, 0.18) !important;
      border-radius: 10px !important;
    }
  `;

  function injectStyle(cssText) {
    if (document.getElementById("ubooquity-admin-i18n-style")) {
      return;
    }
    const style = document.createElement("style");
    style.id = "ubooquity-admin-i18n-style";
    style.textContent = cssText;
    document.head.appendChild(style);
  }

  function replaceTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) {
      return;
    }

    const parentTag = node.parentElement?.tagName;
    if (["SCRIPT", "STYLE", "NOSCRIPT", "TEMPLATE", "CODE", "PRE"].includes(parentTag)) {
      return;
    }

    const original = node.nodeValue;
    if (!original || !original.trim()) {
      return;
    }

    let updated = original;
    for (const [from, to] of TEXT_MAP) {
      updated = updated.replaceAll(from, to);
    }

    if (updated !== original) {
      node.nodeValue = updated;
    }
  }

  function replaceAttributes(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const attrs = ["title", "aria-label", "placeholder", "alt", "value"];
    for (const attr of attrs) {
      const value = el.getAttribute(attr);
      if (!value) {
        continue;
      }

      let updated = value;
      for (const [from, to] of ATTR_MAP) {
        updated = updated.replaceAll(from, to);
      }

      if (updated !== value) {
        el.setAttribute(attr, updated);
      }
    }
  }

  function translateTree(root = document.body) {
    if (!root) {
      return;
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }
    textNodes.forEach(replaceTextNode);

    root.querySelectorAll("*").forEach((el) => replaceAttributes(el));
  }

  function markPage() {
    const path = location.pathname.toLowerCase();
    document.documentElement.classList.add("ubooquity-admin-i18n");
    if (path.includes("/admin")) {
      document.documentElement.setAttribute("lang", "zh-Hans");
    }

    let title = document.title;
    for (const [from, to] of TEXT_MAP) {
      title = title.replaceAll(from, to);
    }
    if (title !== document.title) {
      document.title = title;
    }
  }

  function boot() {
    markPage();
    injectStyle(STYLE);
    translateTree();

    const observer = new MutationObserver(() => {
      translateTree();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
