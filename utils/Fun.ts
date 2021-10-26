export function game_log() {
  console.clear();
  console.log(
    `%c${"Hey! So, you were checking out my site?"}`,
    `color: white;
		font-weight: bold;
		font-size: 1.1em;
		padding: 0.2rem 1rem;
		background: linear-gradient(to right,#746aff,#06acff);
		line-height: 1.1`
  );
  console.log(
    `%c${"Thank you for that"}`,
    `color: white;
	  font-weight: bold;
	  font-size: 1.4em; 
		`
  );
  console.log("Want to know about the font? It's DM Sans");
  console.log("Want to know about the colors? Find yourself 😉");
  console.log(
    `%c${"So, I have a quiz puzzle for you here. Ready for that? Best of Luck. 👍🏻"}`,
    `color: white;
	  font-weight: bold;
	  font-size: 1.4em; 
		`
  );
  console.groupCollapsed("need a hint?");
  console.log(
    `%c${"Your boss is waiting for you to look at what you have done so far."}`,
    "font-family: monospace"
  );
  console.groupEnd();
}
