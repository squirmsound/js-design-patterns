import Rx from 'rxjs';
// Test helpers
const ta_result = document.getElementById('ta_result');

function emits(who, who_) {
  return function(x) {
    who.innerHTML = [who.innerHTML, who_ + ' emits ' + JSON.stringify(x)].join(
      '\n'
    );
  };
}

const blogPosts = [
  { user: 1, msg: 'Anyone here?' },
  { user: 2, msg: 'Hi' },
  { user: 2, msg: 'How are you?' },
  { user: 1, msg: 'Hello' },
  { user: 1, msg: 'Good' }
];

// Auxiliary functions
function isNextable(blogPost, index) {
  return index + 1 < blogPost.length;
}

function isPrevable(blogPost, index) {
  return index > 0;
}

function isNextClick(ev) {
  return ev.target.id === 'next';
}

function isPrevClick(ev) {
  return ev.target.id === 'prev';
}

// Core
const prevClicks = Rx.Observable.fromEvent(
  document.getElementById('prev'),
  'click'
);
const nextClicks = Rx.Observable.fromEvent(
  document.getElementById('next'),
  'click'
);

const blogPosts$ = Rx.Observable.just(blogPosts);

const index$ = Rx.Observable
  .merge(nextClicks, prevClicks)
  .withLatestFrom(blogPosts$, (ev, blogPosts) => {
    return { posts: blogPosts, ev: ev };
  })
  .tap(x => {
    console.log(x.ev.target.id);
  })
  .scan((index, posts_and_ev) => {
    return isNextClick(posts_and_ev.ev) && isNextable(posts_and_ev.posts, index)
      ? index + 1
      : isPrevClick(posts_and_ev.ev) && isPrevable(posts_and_ev.posts, index)
        ? index - 1
        : index;
  }, 0);

const currentPost$ = index$
  .withLatestFrom(blogPosts$, (index, blogPost) => {
    return blogPost[index];
  })
  .startWith(blogPosts[0])
  .do(emits(ta_result, 'blog post :'));

const postNextable = index$.withLatestFrom(blogPosts$, (index, blogPost) => {
  return isNextable(blogPost, index);
});

const postPrevable = index$.withLatestFrom(blogPosts$, (index, blogPost) => {
  return isNextable(blogPost, index);
});

currentPost$.subscribe(() => {});
