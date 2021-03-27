/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-danger */
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Head from 'next/head';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import SidebarOverlay from '../../components/SidebarOverlay';
import Comments from '../../components/Comments';

import { devblog11 as devblog } from '../../other/devblog_descriptions';

import Title from '../../public/images/devblog/11/title.png?webp&url';
import TitleLQ from '../../public/images/devblog/11/title.png?webp&lqip';

export const getStaticProps = () => ({
  props: {
    title: 'Devblog 11',
    id: 'devblog-11',
    type: 'article',
    description: devblog.description,
    devblog: {
      id: '11',
      ...devblog,
    },
    image: {
      url: devblog.image_url || Title.toString(),
      large: true,
    },
  },
});

export default function Devblog11(page) {
  const [sidebar, toggleSidebar] = useState(isMobile ? { 'data-sidebar-hidden': 'hidden' } : {});
  return (
    <div>
      <Header {...page} />
      <Head>
        {page.devblog.date_manual ? null : (
          <meta
            property="og:article:published_time"
            content={moment(page.devblog.date,
              'MM-DD-YYYY').format('YYYY-M-D')}
          />
        )}
      </Head>
      <div
        id="page-wrapper"
        className="dark-mode page-wrapper with-transitions with-navbar with-sidebar with-navbar-fixed-bottom with-custom-webkit-scrollbars with-custom-css-scrollbars"
        data-sidebar-type="overlayed-sm-and-down"
        {...sidebar}
      >
        <Navbar {...{
          toggleSidebar, sidebar,
        }}
        />
        <SidebarOverlay {...{
          toggleSidebar, sidebar,
        }}
        />
        <Sidebar {...page} />
        <div className="content-wrapper">
          <div className="container-fluid">
            <div className="row row-eq-spacing-lg">
              <div className="col-lg-9">
                <div className="content">
                  <h1 className="content-title">
                    Devblog
                    {' '}
                    {page.devblog.id}
                    {' '}
                    -
                    {' '}
                    { page.devblog.date_manual || moment(page.devblog.date,
                      'MM-DD-YYYY').format('MMMM Do, YYYY') }
                    {' '}
                    -
                    {' '}
                    <a href={page.devblog.url}>Original</a>
                  </h1>
                </div>
                <div className="card">
                  <style dangerouslySetInnerHTML={{
                    __html: `
                    article span.lazy-load-image-background {
                      width: 100%;
                    }
                    article img {
                      width: 100%;
                    }
                `,
                  }}
                  />
                  <article>
                    <LazyLoadImage
                      alt="title"
                      src={Title}
                      placeholderSrc={TitleLQ}
                      effect="blur"
                    />
                    <br />
                    <b>Hi Mechanics!</b>
                    <br />
                    It’s that time
                    again - we’ve managed to sneak some Scrap Mechanic news past
                    the Farmbots! These last few months have been pretty fantastic
                    for us at Axolot, because we’ve managed to make a ton of
                    progress on the game. As always we’ve loved watching the
                    inventive ways you all find to use your scrap and we’re
                    pleased to say that while we’ve been hard at work on Survival
                    mode, we’ve also found the time to start developing some other
                    cool new features too.
                    <br />
                    <br />
                    So, without further ado -
                    let’s dive in to all the juicy new stuff!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="pistons" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/11/pistons.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/11/pistons.png?webp&lqip')}
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/11/piston-setting.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/11/piston-setting.png?webp&lqip')}
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- Pistons are in the works!</b>
                    <br />
                    Time and time
                    again we get people pining for interactive parts, and pistons
                    always top the list. Well, request no longer Mechanics,
                    because it’s nearly time to get your pist-on! Eagle-eyed
                    players may remember that a long time ago in a Devblog
                    far,far,away we promised to add something special to the
                    Pistons. Well folks, hold on to your tool belts because we’re
                    happy to reveal that with the arrival of the piston comes a
                    brand new feature! Players will be able to connect these new
                    interactive parts to a controller, making them expand and
                    contract in a sequence. Just thinking about the amount of
                    awesome things you will be able to build with that function
                    blows our mind so we hope you’re excited too!
                    <br />
                    As well as
                    expanding and contracting, you will also be able to simply
                    connect them to a trigger and set the extract length. Right
                    now they can be up to 16 blocks long, but as this part is
                    still fairly new, we’re still toying around with its maximum
                    length. Unfortunately, it’s not quite ready yet because we
                    have to find that sweet spot that also works well with
                    Survival mode. We were originally planning to have this part
                    come out alongside Survival, but after seeing such high demand
                    for pistons we decided to shuffle them straight to the front
                    of the queue! Exciting, eh? Work on pistons is well underway –
                    and we can’t wait to see what you all choose to do with them.
                    Thanks for your patience - pist and love to you all.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="warehouses" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/11/warehouse1.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/11/warehouse1.png?webp&lqip')}
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/11/warehouse2.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/11/warehouse2.png?webp&lqip')}
                      effect="blur"
                    />
                    <br />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/11/warehouse3.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/11/warehouse3.png?webp&lqip')}
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- Spooky warehouses</b>
                    <br />
                    Remember the glory days
                    of Devblog 9? What a time to be alive! In that wondrous update
                    we shared some really early images from a huge, spooky-looking
                    warehouse that we were working on for Survival. Well fearless
                    players, we’re happy to say that we’ve got a scary sneak peek
                    for you all. Creepy, huh? While it’s already pretty cool, the
                    good news is, the whole warehouse interior is also fully
                    destructible! Obviously this is still a work in progress, so
                    keep in mind that this place will soon get even darker and
                    more sinister when we add the final lighting.…Well, if we
                    aren’t too scared to finish building it anyway! As we
                    mentioned in DB 9, more buildings are also in the works, but
                    as we’re massive teases - that’s all we can say for now.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="scaling-wedges" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/11/wedges.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/11/wedges.png?webp&lqip')}
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>
                      - Scaling wedges will make your life easier
                    </b>
                    <br />
                    We don’t know about you, but we’re big fans of potato
                    wedges here at Scrap Mechanic HQ. Whilst munching on those
                    delicious, juicy chunks of carby goodness, we were struck with
                    inspiration – WE CAN LET THEM SCALE THEIR WEDGES! We’ve heard
                    what you’ve been saying, and we know that building with
                    slanted parts can feel a bit tedious.That’s why we are working
                    on scalable wedges so you can get that large slanted surface
                    you all desire faster than ever before.Yep, that’s right - all
                    blocks will be getting a slanted version! Depending on how the
                    block is rotated, it will scale either vertically or
                    horizontally,saving you all a ton of time. We can’t wait to
                    get them in the game so you Mechanics don’t have to place
                    wedge parts one by one. Now if you’ll excuse us, we have some
                    potato wedges to attend to.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="creative-terrain-update" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/11/terrain.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/11/terrain.png?webp&lqip')}
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- Creative mode terrain update</b>
                    <br />
                    As long time
                    players may have noticed, the creative mode terrain has been
                    the same since release a little over a year ago.
                    <br />
                    Right
                    now it’s made out of over 30 Terrain tiles in different sizes
                    that get generated randomly every time a world is created.
                    While this is all well and good, we thought it was time to
                    live up to the mode’s namesake and add a little more creative
                    variation! By carefully watching how you mechanics play the
                    game, we think we now have a pretty good idea of how to make
                    the terrain tiles even more fun to play around in. So we’re
                    happy to announced that we will be adding over 20 big and
                    small terrain tiles to the mix very shortly. Expect a lot of
                    great jumps, ramps and even a cave or two! As we’re all about
                    giving you control, we’re also planning to give mechanics
                    access to the very terrain editor that we use in the studio.
                    Yep, that means that soon everyone will be able to make their
                    own terrain! You can expect more news on that exciting feature
                    in the coming months.
                    <br />
                    <br />
                    <br />
                    <a href="#" id="new-outfits" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src={require('../../public/images/devblog/11/outfits.png?webp&url')}
                      placeholderSrc={require('../../public/images/devblog/11/outfits.png?webp&lqip')}
                      effect="blur"
                    />
                    <br />
                    <br />
                    <b>- New outfits</b>
                    <br />
                    We all know that there’s
                    nothing better than that feeling of rocking a fresh new
                    outfit, so we thought we’d treat you all too some sweet new
                    threads. Right now we have made over 50 pieces of new unique
                    clothing that the player can equip! What can you expect from
                    these classy new outfits, you ask? Well, that would be ruining
                    the surprise wouldn’t it? ..OK,OK as we’re nice we’ll let you
                    have a quick look at two outfits we managed to sneak past the
                    Farmbots unnoticed! If you like what you see, remember there’s
                    plenty more on the way, too. We love customizing our
                    characters just as much as you do, so as well as these awesome
                    new outfits, we’ll be adding even more cool outfits for you to
                    try on when we launch Survival mode.
                    <br />
                    <br />
                    <a href="#" id="optimization" style={{ display: 'block' }} aria-hidden="true" />
                    <b>
                      - Optimization
                    </b>
                    <br />
                    Now that we have our shiny new engine in place, we can
                    focus on making Scrap Mechanic run as smoothly as possible. As
                    well as tweaking the engine to help you all get even better
                    frame rates, we will also be updating the game so that
                    bearings that aren’t moving will freeze. This should make
                    creations with a lot of bearings run much smoother, hopefully
                    making Scrap Mechanic even more fun. For us we’re always
                    working on improving the game, whether that’s through tweaks,
                    new content and even huge undertakings like Survival. As you
                    can probably imagine, Scrap Mechanic is a pretty complex game
                    to work on thanks to its unique physics and growing
                    multiplayer component. Juggling the creation of a new mode,
                    constant new content AND multiple tweaks takes a fair amount
                    of time, but we’re almost there. The team’s working incredibly
                    hard to get these optimization tweaks out to you soon, so
                    thanks for being patient!
                    <br />
                    <br />
                    <br />
                    <a href="#" id="fire-particles" style={{ display: 'block' }} aria-hidden="true" />
                    <LazyLoadImage
                      src="https://i.imgur.com/bvKHOKr.gif"
                      placeholderSrc="https://i.imgur.com/bvKHOKrs.gif"
                    />
                    <br />
                    <LazyLoadImage
                      src="https://i.imgur.com/oXp2Ls3.gif"
                      placeholderSrc="https://i.imgur.com/oXp2Ls3s.gif"
                    />
                    <br />
                    <br />
                    <b>
                      - Smoking hot particles
                    </b>
                    <br />
                    Since we made our new particle engine, we have made a
                    ton of sexy new particles that will be added to the game.
                    Hottest on the list are these smoking hot particles...I mean,
                    just look at them! We thought that you Mechanics could get a
                    kick out of these, so here is an early look at an explosion in
                    action and our dazzling new fire! Did we just confirm
                    destruction? Well, that would be telling.
                    <br />
                    <br />
                    <a href="#" id="survival" style={{ display: 'block' }} aria-hidden="true" />
                    <b>
                      - When is Survival Mode coming out?
                    </b>
                    <br />
                    Unsurprisingly, we are still hard at work on Survival,
                    but we’re pleased to say that recently we’ve been really happy
                    with the progress that we’ve made.
                    <br />
                    This is largely thanks
                    to us bringing in more programming wizards to speed up
                    development – and these new additions to the team have been a
                    huge help. While we know you’re all patiently waiting to play
                    it, we can’t stress enough that our ambitions are high for
                    this mode and will not release it until we feel that Survival
                    is a mode that is great fun and worthy of your time. We are
                    basically making a whole new game...in a way.
                    <br />
                    <br />
                    <a href="#" id="mods" style={{ display: 'block' }} aria-hidden="true" />
                    <a href="#" id="mod-support" style={{ display: 'block' }} aria-hidden="true" />
                    <b>
                      - Mod support
                    </b>
                    <br />
                    Firstly we’ve been blown away by all the great feedback
                    from this, so thanks once again to everyone who’s helped us
                    test the mod support. We were really impressed to see that so
                    many brilliant mods where uploaded during the testing period.
                    If you missed out on these, you can see all the mods made to
                    date on our steam workshop page.
                    <br />
                    The first step to making
                    this work for modders was to let them add their own parts and
                    blocks in an easy and intuitive way. We’re really happy with
                    how this worked out, and we’re working hard right now to given
                    modders even more awesome options in the future. In fact, the
                    whole Survival mode is pretty much being made like a mod from
                    the ground up so that we can give modders a ton of
                    possibilities straight off the bat. We will continue to tweak
                    and add in improvements that you guys suggested.
                    <br />
                    <br />
                    <br />
                    That’s
                    all for this devblog, thanks so much for hanging out with us
                    and reading.
                    <br />
                    Until next time, Mechanics. Stay
                    creative!
                  </article>
                </div>
                <Comments />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
