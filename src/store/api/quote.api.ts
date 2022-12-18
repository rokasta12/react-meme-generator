import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QUOTE_API } from "../../common/constants";
import { Quote } from "../features/quote/quote.slice";

export const quoteAPI = createApi({
  reducerPath: "deliveryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${QUOTE_API}/`,
  }),
  endpoints: (builder) => ({
    getQuotes: builder.query<Quote[], void>({
      query: () => ({
        url: "quotes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetQuotesQuery } = quoteAPI;

export const dummyData = [
  {
    q: "You cannot control the behavior of others, but you can always choose how you respond to it.",
    a: "Roy T. Bennett",
    c: "91",
    h: "<blockquote>&ldquo;You cannot control the behavior of others, but you can always choose how you respond to it.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
  },
  {
    q: "Little minds have little worries, big minds have no time for worries.",
    a: "Ralph Waldo Emerson",
    c: "69",
    h: "<blockquote>&ldquo;Little minds have little worries, big minds have no time for worries.&rdquo; &mdash; <footer>Ralph Waldo Emerson</footer></blockquote>",
  },
  {
    q: "All that a man achieves and all that he fails to achieve is the direct result of his own thoughts.",
    a: "James Allen",
    c: "98",
    h: "<blockquote>&ldquo;All that a man achieves and all that he fails to achieve is the direct result of his own thoughts.&rdquo; &mdash; <footer>James Allen</footer></blockquote>",
  },
  {
    q: "A loving heart is the truest wisdom.",
    a: "Charles Dickens",
    c: "36",
    h: "<blockquote>&ldquo;A loving heart is the truest wisdom.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>",
  },
  {
    q: "You are now, and you do become, what you think about.",
    a: "Earl Nightingale",
    c: "53",
    h: "<blockquote>&ldquo;You are now, and you do become, what you think about.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>",
  },
  {
    q: "Every time we liberate a woman, we liberate a man. ",
    a: "Margaret Mead",
    c: "51",
    h: "<blockquote>&ldquo;Every time we liberate a woman, we liberate a man. &rdquo; &mdash; <footer>Margaret Mead</footer></blockquote>",
  },
  {
    q: "The fear of death is more to be feared, than death itself.",
    a: "Publilius Syrus",
    c: "58",
    h: "<blockquote>&ldquo;The fear of death is more to be feared, than death itself.&rdquo; &mdash; <footer>Publilius Syrus</footer></blockquote>",
  },
  {
    q: "Perhaps the most tragic thing about mankind is that we are all dreaming about some magical garden over the horizon, instead of enjoying the roses that are right outside today.",
    a: "Andrew Carnegie",
    c: "175",
    h: "<blockquote>&ldquo;Perhaps the most tragic thing about mankind is that we are all dreaming about some magical garden over the horizon, instead of enjoying the roses that are right outside today.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>",
  },
  {
    q: "Heart is what separates the good from the great.",
    a: "Michael Jordan",
    c: "48",
    h: "<blockquote>&ldquo;Heart is what separates the good from the great.&rdquo; &mdash; <footer>Michael Jordan</footer></blockquote>",
  },
  {
    q: "Do all things with love.",
    a: "Og Mandino",
    c: "24",
    h: "<blockquote>&ldquo;Do all things with love.&rdquo; &mdash; <footer>Og Mandino</footer></blockquote>",
  },
  {
    q: "Genius, in truth, means little more than the faculty of perceiving in an unhabitual way.",
    a: "William James",
    c: "88",
    h: "<blockquote>&ldquo;Genius, in truth, means little more than the faculty of perceiving in an unhabitual way.&rdquo; &mdash; <footer>William James</footer></blockquote>",
  },
  {
    q: "You must welcome change as the rule but not as your ruler. ",
    a: "Denis Waitley",
    c: "59",
    h: "<blockquote>&ldquo;You must welcome change as the rule but not as your ruler. &rdquo; &mdash; <footer>Denis Waitley</footer></blockquote>",
  },
  {
    q: "Today is the oldest you've ever been, and the youngest you'll ever be again.",
    a: "Eleanor Roosevelt",
    c: "76",
    h: "<blockquote>&ldquo;Today is the oldest you've ever been, and the youngest you'll ever be again.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>",
  },
  {
    q: "Don't just sit there. Do something. The answers will follow.",
    a: "Mark Manson",
    c: "60",
    h: "<blockquote>&ldquo;Don't just sit there. Do something. The answers will follow.&rdquo; &mdash; <footer>Mark Manson</footer></blockquote>",
  },
  {
    q: "Any idea, plan, or purpose may be placed in the mind through repetition of thought.",
    a: "Napoleon Hill",
    c: "83",
    h: "<blockquote>&ldquo;Any idea, plan, or purpose may be placed in the mind through repetition of thought.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>",
  },
  {
    q: "Empty yourself of everything - let the mind become still.",
    a: "Lao Tzu",
    c: "57",
    h: "<blockquote>&ldquo;Empty yourself of everything - let the mind become still.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>",
  },
  {
    q: "The time is always right to do what is right.",
    a: "Martin Luther King, Jr.",
    c: "45",
    h: "<blockquote>&ldquo;The time is always right to do what is right.&rdquo; &mdash; <footer>Martin Luther King, Jr.</footer></blockquote>",
  },
  {
    q: "An intelligence test sometimes shows a man how smart he would have been not to have taken it.",
    a: "Laurence J. Peter",
    c: "93",
    h: "<blockquote>&ldquo;An intelligence test sometimes shows a man how smart he would have been not to have taken it.&rdquo; &mdash; <footer>Laurence J. Peter</footer></blockquote>",
  },
  {
    q: "Prefer to be defeated in the presence of the wise than to excel among fools.",
    a: "Dogen",
    c: "76",
    h: "<blockquote>&ldquo;Prefer to be defeated in the presence of the wise than to excel among fools.&rdquo; &mdash; <footer>Dogen</footer></blockquote>",
  },
  {
    q: "It is passion that makes man live; wisdom makes one only last.",
    a: "Nicolas Chamfort",
    c: "62",
    h: "<blockquote>&ldquo;It is passion that makes man live; wisdom makes one only last.&rdquo; &mdash; <footer>Nicolas Chamfort</footer></blockquote>",
  },
  {
    q: "Love is the absence of judgment.",
    a: "Dalai Lama",
    c: "32",
    h: "<blockquote>&ldquo;Love is the absence of judgment.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>",
  },
  {
    q: "Kind words can be short and easy to speak, but their echoes are truly endless.",
    a: "Mother Teresa",
    c: "78",
    h: "<blockquote>&ldquo;Kind words can be short and easy to speak, but their echoes are truly endless.&rdquo; &mdash; <footer>Mother Teresa</footer></blockquote>",
  },
  {
    q: "It's necessary to get the losers out of your life if you want to live your dream.",
    a: "Les Brown",
    c: "81",
    h: "<blockquote>&ldquo;It's necessary to get the losers out of your life if you want to live your dream.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>",
  },
  {
    q: "Being In The Present Means Tuning Out Distractions And Paying Attention To What Is Important, Now.",
    a: "Spencer Johnson",
    c: "98",
    h: "<blockquote>&ldquo;Being In The Present Means Tuning Out Distractions And Paying Attention To What Is Important, Now.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>",
  },
  {
    q: "If you don't read the newspaper, you're uninformed. If you read the newspaper, you're misinformed.",
    a: "Mark Twain",
    c: "98",
    h: "<blockquote>&ldquo;If you don't read the newspaper, you're uninformed. If you read the newspaper, you're misinformed.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>",
  },
  {
    q: "Your only obligation in any lifetime is to be true to yourself.",
    a: "Richard Bach",
    c: "63",
    h: "<blockquote>&ldquo;Your only obligation in any lifetime is to be true to yourself.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>",
  },
  {
    q: "It's your outlook on life that counts.",
    a: "Betty White",
    c: "38",
    h: "<blockquote>&ldquo;It's your outlook on life that counts.&rdquo; &mdash; <footer>Betty White</footer></blockquote>",
  },
  {
    q: "Yesterday is gone. Tomorrow has not yet come. We have only today.",
    a: "Mother Teresa",
    c: "65",
    h: "<blockquote>&ldquo;Yesterday is gone. Tomorrow has not yet come. We have only today.&rdquo; &mdash; <footer>Mother Teresa</footer></blockquote>",
  },
  {
    q: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    a: "Thich Nhat Hanh",
    c: "103",
    h: "<blockquote>&ldquo;Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>",
  },
  {
    q: "The measure of wisdom is how calm you are when facing any given situation.",
    a: "Naval Ravikant",
    c: "74",
    h: "<blockquote>&ldquo;The measure of wisdom is how calm you are when facing any given situation.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>",
  },
  {
    q: "Words are clothes that thoughts wear",
    a: "Samuel Butler",
    c: "36",
    h: "<blockquote>&ldquo;Words are clothes that thoughts wear&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>",
  },
  {
    q: "Because a thing seems difficult for you, do not think it impossible.",
    a: "Marcus Aurelius",
    c: "68",
    h: "<blockquote>&ldquo;Because a thing seems difficult for you, do not think it impossible.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>",
  },
  {
    q: "There are only two ways to live your life. One is as if nothing is a miracle. The other is as if everything is a miracle.",
    a: "Albert Einstein",
    c: "121",
    h: "<blockquote>&ldquo;There are only two ways to live your life. One is as if nothing is a miracle. The other is as if everything is a miracle.&rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>",
  },
  {
    q: "The most important single ingredient in the formula of success is knowing how to get along with people.",
    a: "Theodore Roosevelt",
    c: "103",
    h: "<blockquote>&ldquo;The most important single ingredient in the formula of success is knowing how to get along with people.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>",
  },
  {
    q: "My actions are my only true belongings. I cannot escape the consequences of my actions. My actions are the ground upon which I stand.",
    a: "Thich Nhat Hanh",
    c: "133",
    h: "<blockquote>&ldquo;My actions are my only true belongings. I cannot escape the consequences of my actions. My actions are the ground upon which I stand.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>",
  },
  {
    q: "Be where your enemy is not.",
    a: "Sun Tzu",
    c: "27",
    h: "<blockquote>&ldquo;Be where your enemy is not.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>",
  },
  {
    q: "You purchase pain with all that joy can give and die of nothing but a rage to live.",
    a: "Alexander Pope",
    c: "83",
    h: "<blockquote>&ldquo;You purchase pain with all that joy can give and die of nothing but a rage to live.&rdquo; &mdash; <footer>Alexander Pope</footer></blockquote>",
  },
  {
    q: "Death is not sad; the sad thing is that most people don't really live at all.",
    a: "Dan Millman",
    c: "77",
    h: "<blockquote>&ldquo;Death is not sad; the sad thing is that most people don't really live at all.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>",
  },
  {
    q: "Being ignorant is not so much a shame, as being unwilling to learn.",
    a: "Benjamin Franklin",
    c: "67",
    h: "<blockquote>&ldquo;Being ignorant is not so much a shame, as being unwilling to learn.&rdquo; &mdash; <footer>Benjamin Franklin</footer></blockquote>",
  },
  {
    q: "Just throw away all thoughts of imaginary things, and stand firm in that which you are.",
    a: "Kabir",
    c: "87",
    h: "<blockquote>&ldquo;Just throw away all thoughts of imaginary things, and stand firm in that which you are.&rdquo; &mdash; <footer>Kabir</footer></blockquote>",
  },
  {
    q: "A Penny Saved is a Penny Earned",
    a: "Benjamin Franklin",
    c: "31",
    h: "<blockquote>&ldquo;A Penny Saved is a Penny Earned&rdquo; &mdash; <footer>Benjamin Franklin</footer></blockquote>",
  },
  {
    q: "Your business is not to 'get somewhere' - it is to be here.",
    a: "Dan Millman",
    c: "59",
    h: "<blockquote>&ldquo;Your business is not to 'get somewhere' - it is to be here.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>",
  },
  {
    q: "Sometimes you put walls up not to keep people out, but to see who cares enough to break them down.",
    a: "Socrates",
    c: "98",
    h: "<blockquote>&ldquo;Sometimes you put walls up not to keep people out, but to see who cares enough to break them down.&rdquo; &mdash; <footer>Socrates</footer></blockquote>",
  },
  {
    q: "Keep your face always toward the sunshine -  shadows will fall behind you.",
    a: "Walt Whitman",
    c: "74",
    h: "<blockquote>&ldquo;Keep your face always toward the sunshine -  shadows will fall behind you.&rdquo; &mdash; <footer>Walt Whitman</footer></blockquote>",
  },
  {
    q: "Life is like a beautiful melody, only the lyrics are messed up.",
    a: "Hans Christian Andersen",
    c: "63",
    h: "<blockquote>&ldquo;Life is like a beautiful melody, only the lyrics are messed up.&rdquo; &mdash; <footer>Hans Christian Andersen</footer></blockquote>",
  },
  {
    q: "In order to carry a positive action, we must develop here a positive vision.",
    a: "Dalai Lama",
    c: "76",
    h: "<blockquote>&ldquo;In order to carry a positive action, we must develop here a positive vision.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>",
  },
  {
    q: "Being in a good frame of mind helps keep one in the picture of health.",
    a: "Unknown",
    c: "70",
    h: "<blockquote>&ldquo;Being in a good frame of mind helps keep one in the picture of health.&rdquo; &mdash; <footer>Unknown</footer></blockquote>",
  },
  {
    q: "The more you extend kindness to yourself, the more it will become your automatic response to others.",
    a: "Wayne Dyer",
    c: "100",
    h: "<blockquote>&ldquo;The more you extend kindness to yourself, the more it will become your automatic response to others.&rdquo; &mdash; <footer>Wayne Dyer</footer></blockquote>",
  },
  {
    q: "Rather than waste time and energy worrying, use that time and energy to constructively deal with whatever is causing the worry.",
    a: "Celestine Chua",
    c: "127",
    h: "<blockquote>&ldquo;Rather than waste time and energy worrying, use that time and energy to constructively deal with whatever is causing the worry.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>",
  },
  {
    q: "Formal education will make you a living, self-education will make you a fortune.",
    a: "Jim Rohn",
    c: "80",
    h: "<blockquote>&ldquo;Formal education will make you a living, self-education will make you a fortune.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
];
