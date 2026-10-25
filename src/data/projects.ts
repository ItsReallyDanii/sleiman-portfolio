export interface Project {
	number: string;
	title: string;
	href: string;
	summary: string;
	status: string;
	limitation: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		number: '01',
		title: 'Coldplate Design Engine',
		href: 'https://github.com/ItsReallyDanii/coldplate-design-engine',
		summary:
			'A stage-gated computational pipeline exploring TPMS-inspired liquid coldplates, inverse design, and bounded thermal, flow, and manufacturability screening.',
		status: 'Stage 7 — conditional proceed',
		limitation:
			'Simulation and analytical screening only; real-geometry manufacturability remains unconfirmed, with no fabricated prototype or hardware validation.',
		tags: ['Python', 'Inverse design', 'Screening', 'Validation gates'],
	},
	{
		number: '02',
		title: 'Coldplate TopoBridge',
		href: 'https://github.com/ItsReallyDanii/coldplate-topobridge',
		summary:
			'A provenance-aware bridge that turns bounded flow-like field artifacts into reproducible descriptor summaries and critic sandboxes.',
		status: 'Experimental bridge',
		limitation:
			'Bounded 2D and stacked-slice proxies; no proof of physical realism, vortex correspondence, or real 3D ranking.',
		tags: ['Descriptors', 'Provenance', 'Experimental', 'Reproducibility'],
	},
	{
		number: '03',
		title: 'Thermal Sponge',
		href: 'https://github.com/ItsReallyDanii/thermalsponge2',
		summary:
			'An exploratory artifact for generating porous microstructures and comparing morphology, flow, and thermal simulation metrics with engineering baselines.',
		status: 'Exploratory research prototype',
		limitation:
			'Simulation and proxy evidence only; no physical testing or biological validation against cellular xylem imagery.',
		tags: ['Generative design', 'Porous structures', 'Thermal modeling'],
	},
	{
		number: '04',
		title: 'TopoStream',
		href: 'https://github.com/ItsReallyDanii/topostream_stage0_specs',
		summary:
			'A spec-driven pipeline for representing and comparing vortex and clock topological defects in 2D spin-system simulations using schema-validated token streams.',
		status: 'Implemented synthetic pipeline',
		limitation:
			'Map-mode is synthetic-first; real experimental map integration and cross-producer confidence calibration are not implemented.',
		tags: ['Python', 'Topological defects', 'Simulation', 'Schemas'],
	},
];
