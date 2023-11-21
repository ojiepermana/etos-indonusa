/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'developer_board',
        link: '/dashboard',
    },
    {
        id: 'apps',
        title: 'Aplications',
        type: 'group',
        icon: 'dialpad',
        children: [
            {
                id: 'apps.anggaran',
                title: 'Anggaran',
                type: 'basic',
                icon: 'lightbulb',
                link: '/anggaran',
            },
            // {
            //     id: 'apps.pelanggan',
            //     title: 'Pelanggan',
            //     type: 'basic',
            //     icon: 'emoji_people',
            //     link: '/pelanggan',
            //     externalLink: true,
            //     target: '_self',
            // },
            // {
            //     id: 'apps.activity',
            //     title: 'Aktivitas Markeitng',
            //     type: 'basic',
            //     icon: 'emoji_people',
            //     link: '/activity',
            //     externalLink: true,
            //     target: '_self',
            // },
            // {
            //     id: 'apps.info-pelanggan',
            //     title: 'Info Pelangan',
            //     type: 'basic',
            //     icon: 'nature_people',
            //     link: '/info-pelanggan',
            //     externalLink: true,
            //     target: '_self',
            // },
            // {
            //     id: 'apps.penawaran',
            //     title: 'Penawaran',
            //     type: 'basic',
            //     icon: 'local_offer',
            //     link: '/penawaran',
            //     externalLink: true,
            //     target: '_self',
            // },
            // {
            //     id: 'apps.kontrak',
            //     title: 'Kontrak',
            //     type: 'basic',
            //     icon: 'broken_image',
            //     link: '/kontrak',
            //     externalLink: true,
            //     target: '_self',
            // },
            {
                id: 'apps.target',
                title: 'Penjualan',
                type: 'basic',
                icon: 'album',
                link: '/penjualan',
                // externalLink: true,
                // target: '_self',
            },
            {
                id: 'apps.omset',
                title: 'Omset',
                type: 'basic',
                icon: 'insert_chart',
                link: '/omset',
                // externalLink: true,
                // target: '_self',
            },
            // {
            //     id: 'jadwal',
            //     title: 'Penjadwalan',
            //     type: 'basic',
            //     icon: 'date_range',
            //     link: '/jadwal',
            //     externalLink: true,
            //     target: '_self',
            // },
            // {
            //     id: 'pekerjaan',
            //     title: 'Pekerjaan',
            //     type: 'basic',
            //     icon: 'handyman',
            //     link: '/pekerjaan',
            //     externalLink: true,
            //     target: '_self',
            // },
            {
                id: 'operator',
                title: 'Operator',
                type: 'basic',
                icon: 'sports_kabaddi',
                link: '/operator'
            },
            // {
            //     id: 'keluhan',
            //     title: 'Keluhan',
            //     type: 'basic',
            //     icon: 'campaign',
            //     link: '/keluhan',
            //     externalLink: true,
            //     target: '_self',
            // },
            // {
            //     id: 'inspeksi',
            //     title: 'Inspeksi',
            //     type: 'basic',
            //     icon: 'fact_check',
            //     link: '/inspeksi',
            //     externalLink: true,
            //     target: '_self',
            // },
            {
                id: 'tagihan',
                title: 'Tagihan',
                type: 'basic',
                icon: 'monetization_on',
                link: '/tagihan',
                // externalLink: true,
                // target: '_self',
            },
            {
                id: 'eqs',
                title: 'EQS',
                type: 'basic',
                icon: 'local_shipping',
                link: '/eqs',
                // externalLink: true,
                // target: '_self',
            },
        ]
    },
    {
        id: 'performa',
        title: 'Performa',
        type: 'basic',
        icon: 'bar_chart',
        link: '/performa',
        externalLink: true,
        target: '_self',
    },
    {
        id: 'informasi',
        title: 'Informasi',
        type: 'basic',
        icon: 'campaign',
        link: '/informasi',
        externalLink: true,
        target: '_self',
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'dashboard',
        link: '/dashboard',
        externalLink: true,
        target: '_self',

    },
    {
        id: 'apps',
        title: 'Aplications',
        tooltip: 'Aplications',
        type: 'aside',
        icon: 'dialpad',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'peforma',
        title: 'Peforma',
        tooltip: 'peforma',
        type: 'basic',
        icon: 'bar_chart',
        link: '/peforma'
    },
    {
        id: 'informasi',
        title: 'Informasi',
        tooltip: 'Informasi',
        type: 'basic',
        icon: 'campaign',
        link: '/campaign'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'dashboard',
        link: '/dashboard',
        externalLink: true,
        target: '_self',
    },
    {
        id: 'apps',
        title: 'Apps',
        type: 'group',
        icon: 'dialpad',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'performa',
        title: 'Performa',
        type: 'basic',
        icon: 'bar_chart',
        link: '/performa'
    },
    {
        id: 'informasi',
        title: 'Informasi',
        type: 'basic',
        icon: 'campaign',
        link: '/campaign'
    }
];