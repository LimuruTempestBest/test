import React, { useState, useEffect, createContext } from 'react'
import moment from "moment"
import { Icon } from '@iconify/react';
import copy from 'copy-to-clipboard';
import Switch from "react-switch";
import ReactSwitch from 'react-switch';
import 'animate.css';
export const themeContext = createContext(null);

function App() {

  const [generate2, setgenerate2] = useState("");
  const [copied, setCopied] = useState(false);

  const quotes = [
    "'The two most powerful warriors are patience and time.' — Leo Tolstoy, War and Peace",
    "'Time is what we want most, but what we use worst.' — William Penn, Fruits of Solitude",
    "'All we have to decide is what to do with the time that is given us.' — J.R.R. Tolkien, The Fellowship of the Ring",
    "'The most precious resource we all have is time.' — Steve Jobs",
    "'Time has a wonderful way of showing us what really matters.' — Margaret Peters",
    "'Time is a created thing. To say ‘I don’t have time’ is to say ‘I don’t want to.’' — Lao Tzu",
    "'No man goes before his time. Unless the boss leaves early.' — Groucho Marx",
    "'The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.' — C.S. Lewis",
    "'The bad news is time flies. The good news is you’re the pilot.' — Michael Altshuler",
    "'There’s only one thing more precious than our time and that’s who we spend it on.' — Leo Christopher",
    "'An inch of time is an inch of gold, but you can’t buy that inch of time with an inch of gold.' — Chinese Proverb",
    "'There’s never enough time to do it right, but there’s always enough time to do it over.' — Jack Bergman",
    "'A man who dares to waste an hour of time has not discovered the value of life.' — Charles Darwin",
    "'Time isn’t the main thing. It’s the only thing.' — Miles Davis",
    "'I am not particularly interested in saving time; I prefer to enjoy it.' — Eduardo Galeano",
    "'Time flies over us, but leaves its shadow behind.' — Nathaniel Hawthorne, The Marble Faun",
    "'Time is what keeps everything from happening at once.' — Ray Cummings, The Girl in the Golden Atom",
    "'It’s not that we have little time, but more that we waste a good deal of it.' — Seneca",
    "'I wish I could turn back the clock and find you sooner so I can love you longer.' — Unknown",
    "'Time moves slowly, but passes quickly.' — Alice Walker, The Color Purple",
    "'You will never find time for anything. If you want time, you must make it.' — Charles Buxton",
    "'There’s never enough time to do all the nothing you want.' — 'Calvin and Hobbes' by Bill Watterson",
    "'They always say time changes things, but you actually have to change them yourself.' — Andy Warhol, The Philosophy of Andy Warhol",
    "'Time is a waste of money.' — Oscar Wilde",
    "'Time is a great healer, but a poor beautician.' — Lucille S. Harper",
    "'No measure of time with you will be long enough. But let’s start with forever.' — Stephenie Meyer, Breaking Dawn",
    "'You can’t turn back the clock. But you can wind it up again.' — Bonnie Prudden",
    "'Time and tide wait for no man, but time always stands still for a woman of 30.' — Robert Frost",
    "'Time has no meaning when you’re in love.' — Unknown",
    "'Better three hours too soon than one minute too late.' — William Shakespeare, The Merry Wives of Windsor",
    "'There is a time for work and a time for love. That leaves no other time.' — Coco Chanel",
    "'Time is the longest distance between two places.' — Tennessee Williams, The Glass Menagerie",
    "'To live is so startling, it leaves little time for anything else.' — Emily Dickinson",
    "'Lost time is never found again.' — Benjamin Franklin, Poor Richard’s Almanac",
    "'The only reason for time is so that everything doesn’t happen at once.' — Albert Einstein",
    "'Time you enjoy wasted was not time wasted.' — John Lennon",
    "'Time is precious. Make sure you spend it with the right people.' — Unknown",
    "'Who controls the past, controls the future: who controls the present controls the past.' — George Orwell, 1984",
    "'Time, which changes people, does not alter the image we have of them.' — Marcel Proust",
    "'If you judge people, you have no time to love them.' — Mother Teresa",
    "'The few hours I spend with you are worth the thousand hours I spend without you.' — Unknown",
    "'If you spend too much time thinking about a thing, you’ll never get it done.' — Bruce Lee",
    "'Men talk of killing time, while time quietly kills them.' — Dion Boucicault",
    "'Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.' — Roy T. Bennett, The Light in the Heart",
    "'It is the time you have wasted for your rose that makes your rose so important.' — Antoine de Saint-Exupéry, The Little Prince",
    "'Own time, or time will own you.' — Brian Norgard",
    "'Time is a game played beautifully by children.' — Heraclitus, Fragments",
    "'Being with you and not being with you is the only way I have to measure time.' — Jorge Luis Borges",
    "'Time takes it all, whether you want it to or not.' — Stephen King, The Green Mile",
    "'Time can be a greedy thing-sometimes it steals the details for itself.' — Khaled Hosseini, The Kite Runner",
    "'Clocks slay time... time is dead as long as it is being clicked off by little wheels; only when the clock stops does time come to life.' — William Faulkner, The Sound and the Fury",
    "'It is looking at things for a long time that ripens you and gives you a deeper meaning.' — Vincent Van Gogh",
    "'Punctuality is the thief of time.' — Oscar Wilde, The Picture of Dorian Gray",
    "'With endless time, nothing is special. With no loss or sacrifice, we can’t appreciate what we have.' — Mitch Albom, The Time Keeper",
    "'The wisest are the most annoyed at the loss of time.' — Dante Alighieri",
    "'We shouldn't waste time on things that might happen someday, or maybe even never.' — Colleen Hoover, It Ends With Us",
    "'Time is the most valuable thing that a man can spend.' — Diogenes",
    "'Time itself comes in drops.' — William James",
    "'Time, as far as my father was concerned, was a gift you gave to other people.' — Michelle Obama, Becoming",
    "'It’s always about timing. If it’s too soon, no one understands. If it’s too late, everyone’s forgotten.' — Anna Wintour",
    "'If one has no time, one has also lost oneself.' — Marc Wittmann, Felt Time",
    "'Every day is a bank account, and time is our currency. No one is rich, no one is poor, we've got hours each.' — Christopher Rice",
    "'Time is a storm in which we are all lost.' — William Carlos Williams",
    "'I don't need time, I need a deadline.' — Duke Ellington",
    "'Each day a day goes by.' — Carlo Goldoni",
    "'The key is in not spending time, but in investing it.' — Stephen R. Covey, The 7 Habits of Highly Effective People",
    "'Time is more value than money. You can get more money, but you cannot get more time.' — Jim Rohn",
    "'We must use time as a tool, not as a couch.' — John F. Kennedy",
    "'We must use time wisely and forever realize that the time is always ripe to do right.' — Nelson Mandela",
    "'There’s time enough, but none to spare.' – Charles W. Chesnutt",
    "'Time expands, then contracts, all in tune with the stirrings of the heart.' — Haruki Murakami, Kafka on the Shore",
    "'All great achievements require time.' — Maya Angelou",
    "'Time flies. It’s up to you to be the navigator.' — Robert Orben",
    "'Time will explain.' — Jane Austen, Persuasion",
    "'Time and tide wait for no man.' – Geoffrey Chaucer",
    "'Time is a companion that goes with us on a journey.' — Captain Jean-Luc Picard, STAR TREK",
    "'Enjoy life. There’s plenty of time to be dead.' — Hans Christian Andersen",
    "'Time makes more converts than reason.' – Thomas Paine, Common Sense",
    "'As time goes by, you seem to weed out the things that were making your life hard.' — Tom Petty",
    "'Time stays long enough for anyone who will use it.' — Leonardo da Vinci",
    "'The innocent and the beautiful have no enemy but time.' — William Butler Yeats",
    "'The best time to plant a tree was years ago. The second best time is now.' — Chinese Proverb",
    "'Time is the least thing we have of.' — Ernest Hemingway",
    "'Time is long but life is short.' — Stevie Wonder",
    "'There are no secrets that time does not reveal.' — Jean Racine",
    "'Time is the wisest counselor of all.' — Pericles",
    "'You can’t make up for lost time. You can only do better in the future.' — Ashley Ormon",
    "'The way we spend our time defines who we are.' — Jonathan Estrin",
    "'Whether it’s the best of times or the worst of times, it’s the only time we’ve got.' — Art Buchwald",
    "'The present time has one advantage over every other — it is our own.' — Charles Caleb Colton",
    "'Lack of time is actually lack of priorities.' — Tim Ferriss, Tools of Titans",
    "'We go back and forth between being time’s master and its victim.' — James Gleick",
  ];

  const generate = () => {
    setgenerate2(
      quotes[Math.floor(Math.random() * quotes.length)]
    );
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };



  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div className="flex flex-col gap-10 items-center justify-center w-full h-screen" id={theme}>
        <div className="font-black text-3xl md:text-5xl tracking-wider text animate__animated animate__bounce">
          Master Time
        </div>
        <div className="animate__animated animate__pulse text-lg md:text-xl font-bold text-slate-100 text text flex justify-center" >
          {generate2}
        </div>
        <div className=" flex flex-row gap-4">
          <button
            onClick={() => {
              generate()
            }}>
            <Icon className="animate__animated animate__fadeInLeftBig text-slate-100 text-lg text" icon="fluent:arrow-reset-24-filled" />
          </button>
          <button onClick={() => {
            copy(generate2);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
          >
            <Icon className="animate__animated animate__fadeInRightBig hover:cursor-pointer text-yellow-300 w-4 md:w-5 h-4 md:h-5" icon={copied ? "uil:check" : "uil:copy"} />
          </button>
        </div>
        <div className="switch flex items-center gap-4 font-bold text">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </themeContext.Provider>
  )
}

export default App