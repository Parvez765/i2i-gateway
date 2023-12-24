const clientLogos = [
    {
        id: 1,
        img: "https://i.ibb.co/9tQTwCh/menna-Bazar-01.png"
    },
    {
        id: 2,
        img: "https://i.ibb.co/0YXC2q6/AandE-01.png"
    },
    {
        id: 3,
        img: "https://i.ibb.co/C85vph7/Alim-01.png"
    },
    {
        id: 4,
        img: "https://i.ibb.co/bJ78RZd/Best-Pool-01.png"
    },
    {
        id: 5,
        img: "https://i.ibb.co/9hY691s/Bisap-01.png"
    },
    {
        id: 6,
        img: "https://i.ibb.co/w45qTzg/li-Fung-01.png"
    },
    {
        id: 7,
        img: "https://i.ibb.co/tPQRwT4/Gawsia-Developers-Ltd-1.gif"
    },
    {
        id: 8,
        img: "https://i.ibb.co/P4vQhVB/RMG-Times-Logo-300x92-1.jpg"
    },
    {
        id: 9,
        img: "https://i.ibb.co/gjg91q8/Gemcon-Group-1-removebg-preview.png"
    },
    {
        id: 10,
        img: "https://i.ibb.co/FqXKwFG/Gemii-Sea-Food-Ltd-1.png"
    },
    {
        id: 11,
        img: "https://i.ibb.co/3TbB4Sn/Graphics-Texttiles-Ltd-1-removebg-preview.png"
    },
    {
        id: 12,
        img: "https://i.ibb.co/hd6mk80/images-3-removebg-preview.png"
    },
    {
        id: 13,
        img: "https://i.ibb.co/JcyTVqc/Kazi-Kazi-Tea-removebg-preview.png"
    },
    {
        id: 14,
        img: "https://i.ibb.co/tPMTn4c/Mamiya-OP-removebg-preview.png"
    },
    {
        id: 15,
        img: "https://i.ibb.co/0rxX8mf/Mbrella-Ltd-jpg-300x76-removebg-preview.png"
    },
    {
        id: 16,
        img: "https://i.ibb.co/YDtN0Kb/meena-sweets-removebg-preview.png"
    },
    {
        id: 17,
        img: "https://i.ibb.co/2g7bnB4/esbl-removebg-preview.png"
    },
    {
        id: 19,
        img: "https://i.ibb.co/KN6Y9ZG/SMS-Logo-300x156-removebg-preview.png"
    },
    {
        id: 20,
        img: "https://i.ibb.co/gFJhg0T/dk-group-300x116.gif"
    },
    {
        id: 21,
        img: "https://i.ibb.co/HKCYpFr/untitled-1-removebg-preview.png"
    },
    {
        id: 22,
        img: "https://i.ibb.co/Lg4JdcN/Titsas-Sweater-Logo-300x300.jpg"
    },
    {
        id: 23,
        img: "https://i.ibb.co/X8pPJ5k/Asian-DAF.jpg"
    },
    {
        id: 24,
        img: "https://i.ibb.co/61dZhYv/Asian-Group-removebg-preview.png"
    },
    {
        id: 25,
        img: "https://i.ibb.co/r43xybN/pds-removebg-preview.png"
    },
    {
        id: 26,
        img: "https://i.ibb.co/YhyFbsB/gssl.jpg"
    },
    {
        id: 27,
        img: "https://i.ibb.co/hcSc1Xm/raj-lanka-power-company-ltd-removebg-preview.png"
    },
    {
        id: 28,
        img: "https://i.ibb.co/wgvDdCD/fenil-lanka-power-ltd.png"
    },
    {
        id: 29,
        img: "https://i.ibb.co/H4cPb7c/lakdhanavi-bangla-power-ltd-300x149-removebg-preview.png"
    },
    {
        id: 30,
        img: "https://i.ibb.co/GpK14sz/textile-today-logo-300x56-removebg-preview.png"
    },
    {
        id: 31,
        img: "https://i.ibb.co/44X8rcN/Akij-Group-1-oibbdealj81tke1zmpm19av6hao6q1p0tsgo0rke80-removebg-preview.png"
    },
    {
        id: 32,
        img: "https://i.ibb.co/xDfszgy/cp-removebg-preview.png"
    },
    {
        id: 33,
        img: "https://i.ibb.co/PZsqSsx/tuv-300x166-removebg-preview.png"
    },
    {
        id: 34,
        img: "https://i.ibb.co/wNc84vv/Bureau-Veritas-Bangladesh-removebg-preview.png"
    },
    {
        id: 35,
        img: "https://i.ibb.co/Sx2JMJr/ICCL-olpewygn322un69jqmqza3llko0r89s3ew8v4c6ygw-removebg-preview.png"
    },
    {
        id: 36,
        img: "https://i.ibb.co/wLFzypx/ulab-ol5bgl6057au4v5xkb5rjt0f2nehfaftn8i0oufta8-removebg-preview.png"
    },
    {
        id: 37,
        img: "https://i.ibb.co/t4hYq7W/Akij-Cement-300x139-removebg-preview.png"
    },
    {
        id: 38,
        img: "https://i.ibb.co/1sHkXs2/myth-footer-logo-00e100410-olpe1wujd1kx6tcy0pnkffmj9j1c05j8t8kjic81z4.png"
    },
    {
        id: 39,
        img: "https://i.ibb.co/hX3nxfS/lakdhanavi-limited-olpe7h25sr6zvra4jm73oj3pslmijom2kriyq9z75s-removebg-preview.png"
    },
    {
        id: 40,
        img: "https://i.ibb.co/Nx8B3k7/anwar-big-logo1-or37w8ua50mydpydtswvwwerl0plqwdu9cjuii0qgw-removebg-preview.png"
    },
    {
        id: 41,
        img: "https://i.ibb.co/3MFkZJv/CP-BAngladesh-or381r68726gffyanon610d0xbk1v197cm7arvuo00-removebg-preview.png"
    },
    {
        id: 42,
        img: "https://i.ibb.co/DWfhcLx/bno-lubjfif-removebg-preview.png"
    },
    {
        id: 43,
        img: "https://i.ibb.co/dfV7sLV/e-cab-removebg-preview.png"
    },
    {
        id: 44,
        img: "https://i.ibb.co/2S4SNQ8/LOGO-of-LFMEAB-Main-removebg-preview.png"
    },
    {
        id: 45,
        img: "https://i.ibb.co/R0wSZSj/COEL-orgbcahfhq36vd41029z82aj6vnpha8916b0kledc0-removebg-preview.png"
    },
    {
        id: 46,
        img: "https://i.ibb.co/khGcVJS/dbi-logo-new-300x52-removebg-preview.png"
    },
    {
        id: 47,
        img: "https://i.ibb.co/4tyv9T0/Daffodil-Uni1-removebg-preview.png"
    },
    {
        id: 48,
        img: "https://i.ibb.co/wCPXTs7/1603179782897-p16xotcwrxmj336qqf2ty5xjljlhsfoxir2621a4u8-removebg-preview.png"
    },
    {
        id: 49,
        img: "https://i.ibb.co/8sh5P5m/AITL-logo-sm-removebg-preview.png"
    },
    {
        id: 50,
        img: "https://i.ibb.co/JRkJc8Q/Akij-Shipping-removebg-preview.png"
    },
    {
        id: 51,
        img: "https://i.ibb.co/Qnc0T85/akijflourmillsltd-removebg-preview.png"
    },
    {
        id: 52,
        img: "https://i.ibb.co/fvDdYMz/novartis-removebg-preview.png"
    },
    {
        id: 53,
        img: "https://i.ibb.co/jyyHqjQ/singer-removebg-preview.png"
    },
    {
        id: 54,
        img: "https://i.ibb.co/tQ1rQqW/Apex-removebg-preview.png"
    },
    {
        id: 55,
        img: "https://i.ibb.co/CtvhKk3/excellent-world-removebg-preview.png"
    },
    {
        id: 56,
        img: "https://i.ibb.co/6JXC3K7/vivo-1-300x101-removebg-preview.png"
    },
    {
        id: 57,
        img: "https://i.ibb.co/HTQYz4k/Asrotex-group.jpg"
    },
    {
        id: 58,
        img: "https://i.ibb.co/q7DxsVJ/1519876129186-p6diowqag05hh9mny0yloq3w1ake1yxxlhppbo2vi8-removebg-preview.png"
    },
    {
        id: 59,
        img: "https://i.ibb.co/zJ82YC5/bay-dev-p6dipn1rrd5iickfocc5mjgso2yo1huf13zarezuo0-removebg-preview.png"
    },
    {
        id: 60,
        img: "https://i.ibb.co/F32X6rY/aci-group-logo-150x150.png"
    },
    {
        id: 61,
        img: "https://i.ibb.co/tYFTBXQ/cement-logo-p6diprqypjby4edlwwdah0a3n0bi3zd2pr8q5ssvsw-removebg-preview.png"
    },
    {
        id: 62,
        img: "https://i.ibb.co/Zg34Rx4/infrastructure-logo-300x69-removebg-preview.png"
    },
    {
        id: 63,
        img: "https://i.ibb.co/T44x3FQ/download-300x166-removebg-preview.png"
    },
    {
        id: 64,
        img: "https://i.ibb.co/Q6h5rhr/confidence-group-vector-logo-300x69-removebg-preview.png"
    },
    {
        id: 65,
        img: "https://i.ibb.co/Bt8kwz4/beximcocom-removebg-preview.png"
    },
    {
        id: 66,
        img: "https://i.ibb.co/TH33hVT/DCL-Logo1-300x73-removebg-preview.png"
    },
    {
        id: 67,
        img: "https://i.ibb.co/QnWcGr9/Elevate-textiles-300x58-removebg-preview.png"
    },
    {
        id: 68,
        img: "https://i.ibb.co/hKgbDkN/366113597-1628161371006953-8341113748356052909-n-removebg-preview.png" //Bangla Cat
    },
    {
        id: 69,
        img: "https://i.ibb.co/C6yLL01/k-line-logo-png-transparent-300x77-removebg-preview.png"
    },
    {
        id: 70,
        img: "https://i.ibb.co/kBjQ3mM/maf-shoes-300x123-removebg-preview.png"
    },
    {
        id: 71,
        img: "https://i.ibb.co/nQJRnrx/biman-bangladesh-airlines-logo-png-300x154-removebg-preview.png"
    },
    {
        id: 72,
        img: "https://i.ibb.co/K9TxcVp/ucb-bank-logo-300x148-removebg-preview.png"
    },
    {
        id: 73,
        img: "https://i.ibb.co/kSF0hmr/Islami-Bank-300x169-removebg-preview.png"
    },
    {
        id: 74,
        img: "https://i.ibb.co/VW2VwfD/unnamed-300x90-removebg-preview.png"
    },
    {
        id: 75,
        img: "https://i.ibb.co/pzGKCMk/The-ACMELaboratories-Ltd-removebg-preview.png"
    },
    {
        id: 76,
        img: "https://i.ibb.co/Wp1JdhY/SAJIDA-Foundation-Logo-pvnxufvtcpvicv0gcomwto9mdeds7e47jno5aydwjk-removebg-preview.png"
    },
    {
        id: 77,
        img: "https://i.ibb.co/VpGPNng/geostee-150x150.jpg"
    },
    {
        id: 78,
        img: "https://i.ibb.co/Qb8X46v/square-group-logo-pvnxuhrhqdy302xq1pg5ynsjk64imsbo7wz49ib474-removebg-preview.png"
    },
    {
        id: 79,
        img: "https://i.ibb.co/DrZBdbS/Pickard-300x131-1.jpg"
    },
    {
        id: 80,
        img: "https://i.ibb.co/ts5PVxs/shanta-group-300x110.jpg"
    },
    {
        id: 81,
        img: "https://i.ibb.co/y03p3WJ/sailor-removebg-preview.png"
    },
    {
        id: 82,
        img: "https://i.ibb.co/wzkKBMT/epyllion-150x150-removebg-preview.png"
    },
    {
        id: 83,
        img: "https://i.ibb.co/GTGtKjL/dewhirst-300x95.png"
    },
    {
        id: 84,
        img: "https://i.ibb.co/VLnmtVx/hqdefault1-removebg-preview.png"
    },
    {
        id: 85,
        img: "https://i.ibb.co/FHDqdMs/islami-bank-bd-ltd-logo-F7304-B1-A93-seeklogo-com.png"
    },
    // {
    //     id: 86,
    //     img: "https://i.ibb.co/pPHsnSz/RR-Wbesite-Name-Pink.png"
    // },
    {
        id: 87,
        img: "https://i.ibb.co/mcNfWVr/365855957-1324031274873079-5659088970973383883-n.jpg" //Ejab Group
    },
    {
        id: 88,
        img: "https://i.ibb.co/hK122TC/euro-removebg-preview.png"
    },
    {
        id: 89,
        img: "https://i.ibb.co/4JBMsjg/colombia.jpg"
    },
    {
        id: 90,
        img: "https://i.ibb.co/swKJRRQ/shanta.jpg"
    },
    {
        id: 91,
        img: "https://i.ibb.co/mTSXdQd/epic.jpg"
    },
    {
        id: 92,
        img: "https://i.ibb.co/hYqgL0P/partex.jpg"
    },
    {
        id: 93,
        img: "https://i.ibb.co/rbyN4Tx/re.jpg"
    }

]

export default clientLogos