import { useState, useEffect } from 'react';
import Layout from '../../layout/main';
import { CSSTransition } from 'react-transition-group';

const IndexPage = () => {
	const [showMessage, setshowMessage] = useState(null);
	const [quotes, setQuotes] = useState(null);

	useEffect(() => {
		getQuotes();
	}, [])

	const setShowAnimate = (opt) => setshowMessage(opt);

	const getQuotes = async() => {
		setShowAnimate(false);
		const data = await fetch('/quotes/quotes.json');
		const res = await data.json();
		setQuotes(res[Math.floor(Math.random() * res.length)]);
		setShowAnimate(true);
	}

	return (
		<Layout title="Home">
			<section id="quote-box">
				<CSSTransition
					in={showMessage}
					timeout={300}
					classNames="quotes-fade"
					unmountOnExit
					onExited={() => setShowAnimate(true)}
				>
					<section className="quotes-list">
						<h4 id="text">
							{ quotes && quotes.quoteText}
						</h4>
						<h4 id="author">
							- { quotes && quotes.quoteAuthor}
						</h4>
					</section>
				</CSSTransition>
				<section className="quote-action">
					<section id="quote-wrapper">
						<section id="tweet-quote">
							<a target="__blank" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=beebee&text=${quotes && quotes.quoteText}. ${quotes && quotes.quoteAuthor}`}>
								Tweet
							</a>
						</section>
					</section>
					<section className="button-wrapper">
						<button id="new-quote" onClick={() => getQuotes()}>
							New quote
						</button>
					</section>
				</section>
				<section className="wrapper-author">
					-- Bee Bee Wijaya
				</section>
			</section>
			<style jsx>{`
				#quote-box {
					width: 30%;
					background: #fff;
					margin: auto;
					padding: 20px;
					border-radius: 4px;
				}

				.quotes-fade-enter {
					opacity: 0;
				}
				.quotes-fade-enter-active {
					opacity: 1;
					transition: opacity .8s;
				}
				.quotes-fade-exit {
					opacity: 1;
				}
				.quotes-fade-exit-active {
					opacity: 0;
					transition: opacity .8s;
				}

				#text {
					font-size: 24px;
					margin-bottom: 12px;
				}

				#author {
					text-align: right;
    			font-size: 16px;
					margin-bottom: 12px;
				}

				.quote-action {
					margin: 40px 0 10px;
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					align-items: center;
				}

				.button-wrapper {
					text-align: right;
				}

				#tweet-quote a {
					display: grid;
					width: 50px;
					align-items: center;
					justify-content: center;
					padding: 10px;
					border: none;
					border: 2px solid #de6060;
					border-radius: 4px;
					background: #fff;
					color: #de6060;
					cursor: pointer;
					text-decoration: none;
					box-shadow: 0px 12px 11px -10px #aba9a9;
					transition: box-shadow .3s, background .3s, border .3s;
				}

				#tweet-quote a:hover {
					background: #ffdfdf;
					box-shadow: 0px 12px 11px -6px #aba9a9;
					border: 2px solid #fd7b7b;
				}

				#new-quote {
					width: 70%;
					min-height: 38px;
					padding: 4px 8px;
					border: none;
					background: #de6060;
					color: #fff;
					border-radius: 4px;
					cursor: pointer;
					box-shadow: 0px 12px 11px -10px #aba9a9;
					transition: box-shadow .3s, background .3s;
				}
				#new-quote:hover {
					background: #fd7b7b;
					box-shadow: 0px 12px 11px -6px #aba9a9;
				}

				.wrapper-author {
					margin-top: 50px;
					text-align: center;
				}
			`}</style>
		</Layout>
	);
};

export default IndexPage;
