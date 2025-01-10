import { markRaw } from "vue";
import {
    Location,
    Coordinate,
    Notebook,
    Platform,
    DataBoard,
    StarFilled,
    Place,
} from "@element-plus/icons-vue";

export const menuList = [
    {
        index: "operation-site",
        icon: markRaw(Location),
        name: "运维站点",
        isOpen: false,
    },
    {
        index: "test-environment",
        icon: markRaw(Platform),
        name: "测试环境",
        isOpen: false,
    },
    {
        index: "presentation-environment",
        icon: markRaw(DataBoard),
        name: "演示环境",
        isOpen: false,
    },
    {
        index: "virtualization-platform",
        icon: markRaw(Coordinate),
        name: "虚拟化平台",
        isOpen: false,
    },
    {
        index: "common-site",
        icon: markRaw(StarFilled),
        name: "常用站点",
        isOpen: false,
    },
    {
        index: "documentation",
        icon: markRaw(Notebook),
        name: "文档教程",
        isOpen: true,
        children: [
            {
                index: "img-resources",
                groupName: "常用镜像资源文档",
                isOpen: true,
            },
            {
                index: "other-doc",
                groupName: "其他类型文档",
                isOpen: true,
            }
        ]

    },
    {
        index: "about-site",
        icon: markRaw(Place),
        name: "关于本站",
        isOpen: true,
    },
]

export const mdList = [
    {
        mdUrl: "常用镜像资源文档",
        route: "img-resources"
    }, {
        mdUrl: "其它文档",
        route: "other-doc"
    }
]