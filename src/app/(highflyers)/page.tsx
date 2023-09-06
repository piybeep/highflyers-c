import { MATERIALS_LIST } from "@/constants";
import { Course, Lessons, Preview, Showcase, Started } from "@/modules";

import s from './page.module.scss'

export const metadata = {
	title: "Highflyers - школа английского языка",
};

export default function Home() {

	const res = MATERIALS_LIST

	return (
		<main className={s.wrapper}>
			<Preview />
			<Started />
			<Lessons />
			<Course />
			<Showcase materials={res} />
		</main>
	)
}
