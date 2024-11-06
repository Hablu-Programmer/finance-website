const listA = ["Investors", "Features", "Book a demo", "Security"];
const listB = ["Credit Cards", "Gift Cards", "Savings Accounts", "NFT"];
const listC = ["Free rewards", "Documentation", "Affiliate program"];
const listD = ["Changelog", "License", "Site Maps", "News"];

const linkList = (title, list) => (
	<div className='space-y-4 w-1/2'>
		<h5 className='font-bold'>{title}</h5>

		<ul className='space-y-2'>
			{list.map((item, i) => (
				<li className='text-secondary text-sm' key={i}>
					{item}
				</li>
			))}
		</ul>
	</div>
);

const Footer = () => {
	return (
		<footer className='bg-[#292834]/25 flex gap-8 px-24 py-12'>
			<div className='space-y-2 w-1/3'>
				<h4 className='font-bold text-lg'>Wern Finance</h4>

				<p className='text-secondary text-sm'>
					Discover the power of our secure and rewarding credit cards
				</p>
			</div>

			<div className='flex w-1/3'>
				{linkList("About Us", listA)}
				{linkList("Products", listB)}
			</div>

			<div className='flex w-1/3'>
				{linkList("Useful Links", listC)}
				{linkList("Social", listD)}
			</div>
		</footer>
	);
};

export default Footer;