import Desc from "./Desc"
import Initiatives from "./Initiatives"
import Goals from "./Goals"
import Impact from "./Impact"
import Programmes from "./Programmes"
import Involved from "./Involved"
import Hero from "./Hero"

const Landing = () => {
	return (
		<main className="mt-[65px]">
			<Hero />
			<Desc />
			<Programmes />
			<Initiatives />
			<Goals />
			<Impact />
			<Involved />
		</main>
	)
}
export default Landing
