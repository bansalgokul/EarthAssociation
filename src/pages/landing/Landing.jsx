import Desc from "./Desc"
import Initiatives from "./Initiatives"
import Goals from "./Goals"
import Impact from "./Impact"
import Programmes from "./Programmes"
import Involved from "./Involved"
import Hero from "./Hero"
import Blogs from "./Blogs"
import UpcomingEvents from "./UpcomingEvents"

const Landing = () => {
	return (
		<main className="mt-[65px]">
			<Hero />
			<Desc />
			<UpcomingEvents/>
			<Programmes />
			<Initiatives />
			<Goals />
			<Impact />
			<Involved />
			<Blogs />
		</main>
	)
}
export default Landing
