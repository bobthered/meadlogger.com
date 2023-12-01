import { sveltewind } from 'sveltewind/themes';
import { theme } from 'sveltewind/stores';

theme.set(sveltewind);
theme.set({
	button: 'uppercase text-violet-900 hover:bg-violet-400 focus:bg-violet-400 rounded-full',
	buttonIcon: 'px-0 py-0 w-12 h-12 items-center justify-center flex',
	buttonRed:
		'text-white dark:text-white bg-red-500 hover:bg-red-400 focus:bg-red-400 focus:ring-red-500/30',
	buttonSecondary:
		'bg-slate-900 text-white hover:bg-slate-950 focus:bg-slate-950 focus:ring-slate-900/30 dark:bg-slate-50 dark:text-slate-900 dark:hover:text-slate-900 dark:hover:bg-slate-100 dark:focus:bg-slate-100 dark:focus:ring-slate-50/30',
	buttonSM: 'scale-[.875]',
	buttonTransparent:
		'bg-transparent shadow-[inset_0_0_0_rgba(0,0,0,0)] text-current font-medium hover:bg-slate-900/10 focus:bg-slate-900/10 focus:ring-slate-900/5 dark:hover:bg-slate-50/10 dark:focus:bg-slate-50/10 dark:focus:ring-slate-50/5',
	buttonXS: 'scale-[.75]',
	form: 'space-y-8',
	header:
		'ring-0 lg:ring-1 pb-[env(safe-area-inset-bottom)] lg:pb-0 bg-violet-500 lg:bg-transparent',
	legend: 'text-sm',
	nav: 'text-sm flex-row bg-violet-500 lg:flex-col lg:fixed lg:min-h-[100svh] lg:h-[100lvh] lg:max-h-[100svh] lg:h-[100lvh] lg:top-0 lg:left-0 lg:transition lg:duration-200 lg:pt-12 lg:bg-white dark:lg:bg-slate-950 lg:justify-between',
	select: 'py-3',
	tr: 'even:bg-slate-900/5 dark:even:bg-slate-50/5'
});

export { theme };
