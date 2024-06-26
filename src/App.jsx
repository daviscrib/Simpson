import Avatar from "./components/Avatar";

function App() {
	const personnages = [
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
			firstName: "Homer",
			lastName: "Simpson",
			donuts: 15,
		},
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
			firstName: "Marge",
			lastName: "Simpson",
			donuts: -10,
		},
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2240-bart-simpson-skate.png",
			firstName: "Bart",
			lastName: "Simpson",
			donuts: 5,
		},
		{
			image1: "https://mystickermania.com/cdn/stickers/simpsons-stickers/simpsons-lisa-vomiting-512x512.png",
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
			firstName: "Lisa",
			lastName: "Simpson",
			donuts: 2,
		},
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
			firstName: "Maggie",
			lastName: "Simpson",
		},
		{
			image: "https://tiermaker.com/images/template_images/2022/15232775/265-simpsons-characters-15232775/1663480415854png.png",
			firstName: "petit Papa Noel",
			lastName: "Simpson",
		},
	];

	return (
		<>
			<h1>La famille Simpson</h1>
			{personnages.map((personnage, index) => (
				<Avatar
					key={index}
					img1={personnage.image1}
					img={personnage.image}
					firstName={personnage.firstName}
					lastName={personnage.lastName}
					donutsCount={personnage.donuts}
					isBG
				/>
			))}
		</>
	);
}

export default App;