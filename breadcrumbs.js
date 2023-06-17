// 获取当前页面的URL
var currentURL = window.location.href;

// 解析URL获取路径部分
var path = currentURL.split("/").filter(function (item) {
    return item !== "";
});

// 如果当前路径只有根目录，则隐藏面包屑元素
if (path.length <= 2) {
    var breadcrumbsElement = document.getElementById("breadcrumbs");
    if (breadcrumbsElement) {
        breadcrumbsElement.style.display = "none";
    }
} else {
    // 创建无序列表元素
    var breadcrumbList = document.createElement("ul");
    breadcrumbList.classList.add("breadcrumb");
    breadcrumbList.classList.add("mb-0");

    // 添加首页
    var homeListItem = document.createElement("li");
    homeListItem.classList.add("breadcrumb-item");
    homeListItem.textContent = "首页";
    breadcrumbList.appendChild(homeListItem);

    // 添加面包屑导航项
    for (var i = 2; i < path.length; i++) {
        var listItem = document.createElement("li");
        listItem.classList.add("breadcrumb-item");

        // 最后一个项为当前页
        if (i === path.length - 1) {
            listItem.classList.add("active");
            listItem.classList.add("text-success");
            listItem.setAttribute("aria-current", "page");
        }

        listItem.textContent = decodeURIComponent(path[i]);
        breadcrumbList.appendChild(listItem);
    }

    // 将面包屑导航添加到页面中的一个元素中
    var breadcrumbNav = document.createElement("nav");
    breadcrumbNav.setAttribute("aria-label", "breadcrumb");
    breadcrumbNav.style.setProperty("--bs-breadcrumb-divider", "'> '");
    breadcrumbNav.appendChild(breadcrumbList);

    document.getElementById("breadcrumbs").appendChild(breadcrumbNav);
}