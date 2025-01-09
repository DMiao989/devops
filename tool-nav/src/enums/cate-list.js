
export const cateList = [
    {
        id: "operation-site",
        name: "运维站点",
        children: [
            {
                imgUrl: "harbor-horizontal-color.png",
                name: "harbor",
                des: "和利时harbor镜像站",
                url: "http://172.21.44.57",
            },
            {
                imgUrl: "gitlab.png",
                name: "git仓库",
                des: "和利时git仓库",
                url: "https://gitlab.hollysys.net",
            }, {
                imgUrl: "cm.png",
                name: "CM-jenkins",
                des: "CM-jenkins",
                url: "http://172.21.40.14:8080/jenkins/",
            },
            {
                imgUrl: "minio.svg",
                name: "minio",
                des: "minio",
                url: "http://172.21.44.57:9090/",
            }
            , {
                imgUrl: "ip.jpeg",
                name: "31代理站",
                des: "31代理站",
                url: "http://172.21.44.31:8080/",
            },
            {
                imgUrl: "OIP-C.jpeg",
                name: "57缓存站",
                des: "57缓存站",
                url: "http://172.21.44.57:8081/",
            }
            , {
                imgUrl: "down-load.jpeg",
                name: "57下载资源站",
                des: "57下载资源站 CI常用组件下载",
                url: "http://172.21.44.57:10000/",
            },
            {
                imgUrl: "harbor-horizontal-color.png",
                name: "前端镜像站",
                des: "前端镜像站",
                url: "http://172.21.44.57:4873/",
            },
            {
                imgUrl: "sonar.png",
                name: "sonarqube",
                des: "sonarqube",
                url: "http://172.21.220.75:9000/",
            },
        ],
    },
    {
        id: "test-environment",
        name: "测试环境",
        children: [
            {
                imgUrl: "logo.png",
                name: "每日集成环境",
                des: "每日集成环境",
                url: "http://172.21.44.57",
            },
            {
                imgUrl: "logo.png",
                name: "自测集成环境",
                des: "每日集成环境",
                url: "http://172.21.44.57",
            }, {
                imgUrl: "logo.png",
                name: "scada测试环境",
                des: "scada测试环境",
                url: "http://172.21.44.57",
            },
            {
                imgUrl: "logo.png",
                name: "mes测试环境",
                des: "mes测试环境",
                url: "http://172.21.44.57",
            }
            , {
                imgUrl: "logo.png",
                name: "电子工程环境",
                des: "电子工程环境",
                url: "http://172.21.44.57",
            },
            {
                imgUrl: "logo.png",
                name: "康源测试环境",
                des: "康源测试环境",
                url: "http://172.21.44.57",
            }

        ],
    },
    {
        id: "presentation-environment",
        name: "演示环境",
        children: [
            {
                imgUrl: "logo.png",
                name: "演示环境1",
                des: "演示环境1",
                url: "http://172.21.44.57",
            },
            {
                imgUrl: "logo.png",
                name: "演示环境2",
                des: "演示环境2",
                url: "http://172.21.44.57",
            }

        ],
    },
    {
        id: "virtualization-platform",
        name: "虚拟化平台",
        children: [
            {
                imgUrl: "PVE.png",
                name: "PVE节点 172.32.6.4",
                des: "PVE节点 172.32.6.4",
                url: "https://172.32.6.4:8006/",
            },
            {
                imgUrl: "PVE.png",
                name: "PVE节点 172.21.44.56",
                des: "PVE节点 172.21.44.56",
                url: "http://172.21.44.56:8006",
            },
            {
                imgUrl: "PVE.png",
                name: "PVE节点 172.21.44.61",
                des: "PVE节点 172.21.44.61",
                url: "https://172.21.44.61:8006/",
            },
            {
                imgUrl: "PVE.png",
                name: "PVE节点 172.21.44.64",
                des: "PVE节点 172.21.44.64",
                url: "http://172.21.44.64:8006",
            }

        ],
    },
    {
        id: "common-site",
        name: "常用站点",
        children: [
            {
                imgUrl: "alibaba.ico",
                name: "阿里巴巴开源镜像站",
                des: "阿里巴巴开源镜像站",
                url: "https://developer.aliyun.com/mirror/",
            },
            {
                imgUrl: "huaweicloud.png",
                name: "华为开源镜像站",
                des: "华为开源镜像站",
                url: "https://mirrors.huaweicloud.com/home",
            },
            {
                imgUrl: "email.jpeg",
                name: "内网邮件",
                des: "内网邮件",
                url: "https://mail2010.hollysys.net",
            },
            {
                imgUrl: "fillsex-sc.jpeg",
                name: "文件摆渡系统",
                des: "文件摆渡系统",
                url: "http://fillsex-sc.hollysys.net/",
            },
            {
                imgUrl: "logo.png",
                name: "在线工具",
                des: "在线工具",
                url: "https://tool.ul",
            },
            {
                imgUrl: "ducker.jpeg",
                name: "docker hub",
                des: "docker hub",
                url: "http://hub.ducker.com/",
            }

        ],
    },
    // {
    //     id: "documentation-tutorial",
    //     name: "文档教程",
    //     children: [
    //         {
    //             imgUrl: "devopsResorce.png",
    //             name: "开发者资源站",
    //             des: "开发者资源站",
    //             url: "https://hsm-os.pages.hollysys.net/docs/",
    //         },
    //         {
    //             imgUrl: "docs.jpeg",
    //             name: "编码规范文档",
    //             des: "编码规范文档",
    //             url: "https://hsm-os.pages.hollysys.net/hsm-spec/code-style-guide",
    //         },
    //         {
    //             imgUrl: "devops.jpeg",
    //             name: "devops规范文档",
    //             des: "devops规范文档",
    //             url: "https://hsm-os.pages.hollysys.net/hsm-spec/devops-spec",
    //         },
    //         {
    //             imgUrl: "set.jpeg",
    //             name: "常用镜像站配置文档",
    //             des: "常用镜像站配置文档",
    //             url: "https://hsm-os.pages.hollysys.net/hsm-spec/devops-spec/devops/mirrors.html",
    //         }

    //     ],
    // },

]