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
        // children: [
        //     {
        //         index: "ntp",
        //         groupName: "NTP服务器",
        //         isOpen: true,
        //     },
        //     {
        //         index: "dns",
        //         groupName: "DNS服务器",
        //         isOpen: true,
        //     },
        //     {
        //         index: "maven",
        //         groupName: "maven镜像站",
        //         isOpen: false,
        //     },
        //     {
        //         index: "golang",
        //         groupName: "golang镜像站",
        //         isOpen: true,
        //     },
        //     {
        //         index: "npm",
        //         groupName: "npm镜像站",
        //         isOpen: false,
        //     },
        //     {
        //         index: "operating-version",
        //         groupName: "操作系统版本说明",
        //         isOpen: true,
        //     },
        //     {
        //         index: "ubuntu",
        //         groupName: "ubuntu镜像站",
        //         isOpen: true,
        //     },
        //     {
        //         index: "debian",
        //         groupName: "debian镜像站",
        //         isOpen: true,
        //     },
        //     {
        //         index: "cent-os",
        //         groupName: "CentOS",
        //         isOpen: true,
        //     },
        //     {
        //         index: "alpine",
        //         groupName: "Alpine",
        //         isOpen: true,
        //     },
        //     {
        //         index: "yarn",
        //         groupName: "yarn",
        //         isOpen: true,
        //     },
        //     {
        //         index: "pnpm",
        //         groupName: "pnpm",
        //         isOpen: true,
        //     },
        // ],
    },
    {
        index: "about-site",
        icon: markRaw(Place),
        name: "关于本站",
        isOpen: true,
    },
]