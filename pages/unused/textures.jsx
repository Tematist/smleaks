/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line import/no-unresolved
import { LazyLoadImage } from 'react-lazy-load-image-component';
import usernames from '../../other/usernames';

export const getStaticProps = () => ({
  props: {
    title: 'Unused Textures',
    id: 'unused-textures',
  },
});

export default function UnusedTextures() {
  return (
    <div>
      <div className="content">
        <h1 className="content-title">Unused Textures</h1>
      </div>
      <div className="card">
        <a
          id="outfitpackage"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/other/outfitpackge.png">
            <LazyLoadImage
              alt="outfitpackage"
              src={require('../../public/images/other/outfitpackge.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/other/outfitpackge.png?webp&lqip')}
              style={{
                maxWidth: 300, width: '100%', objectFit: 'contain', aspectRatio: '2/1',
              }}
              height={150}
              effect="blur"
            />
          </a>
          <figcaption>
            Outfit Package Unused Textures
            <br />
            <small>
              Found by
              {' '}
              {usernames.turbo}
            </small>
          </figcaption>
        </figure>
        <a
          id="dead-duck"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/other/deadduckhead.png">
            <LazyLoadImage
              alt="dead-duck"
              src={require('../../public/images/other/deadduckhead.png?webp&width=300&url')}
              placeholderSrc={require('../../public/images/other/deadduckhead.png?webp&lqip')}
              style={{
                maxWidth: 300, width: '100%', objectFit: 'contain', aspectRatio: '1/1',
              }}
              height={300}
              effect="blur"
            />
          </a>
          <figcaption>
            Dead Duck
            <br />
            <small>
              Found by
              {' '}
              {usernames.turbo}
            </small>
          </figcaption>
        </figure>
        <a
          id="mechanic-station-billboard"
          href="#"
          style={{ visibility: 'hidden' }}
          aria-hidden="true"
        />
        <figure>
          <a href="/images/other/mechanicstationbillboardalt.png">
            <LazyLoadImage
              alt="mechanic-station-billboard-alt"
              src={require('../../public/images/other/mechanicstationbillboardalt.png?webp&width=400&url')}
              placeholderSrc={require('../../public/images/other/mechanicstationbillboardalt.png?webp&lqip')}
              style={{
                maxWidth: 400, width: '100%', objectFit: 'contain', aspectRatio: '2/1',
              }}
              height={200}
              effect="blur"
            />
          </a>
          <figcaption>
            Mechanic Station Billboard Unused Alt Texture
            <br />
            <small>
              Found by
              {' '}
              {usernames.turbo}
            </small>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
