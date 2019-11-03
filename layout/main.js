import Head from 'next/head';

import '../public/scss/style.scss';

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>Quote Page -- {title}</title>
			</Head>
			<main>{children}</main>
			<style jsx>{`
				main {
					min-height: 100vh;
					height: auto;
					background: #da5c5c;
					padding: 20px;
					display: grid;
					align-items: center;
					justify-content: center;
					grid-template-columns: 1fr;
				}
			`}</style>
		</>
	);
};

export default Layout;
