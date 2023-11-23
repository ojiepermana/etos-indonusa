/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'sales',
        title: 'Sales Portal',
        type: 'basic',
        icon: 'heroicons_outline:squares-2x2',
        link: '/sales'
    }

];
export const compactNavigation: FuseNavigationItem[] = [

    {
        id: 'job',
        title: 'Job',
        tooltip: 'Sales Portal',
        type: 'basic',
        icon: 'heroicons_outline:squares-2x2',
        link: '/job'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'job',
        title: 'Job',
        type: 'basic',
        icon: 'heroicons_outline:squares-2x2',
        link: '/job'
    },
    {
        id: 'billing',
        title: 'Billing',
        type: 'basic',
        icon: 'heroicons_outline:squares-2x2',
        link: '/billing'
    },
    {
        id: 'schedule',
        title: 'Schedule',
        type: 'basic',
        icon: 'heroicons_outline:squares-2x2',
        link: '/schedule'
    },
    {
        id: 'report',
        title: 'Report',
        type: 'basic',
        icon: 'heroicons_outline:squares-2x2',
        link: '/report'
    },
];
