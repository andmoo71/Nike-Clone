import '../styles/HeaderLine2.css';
import nikeLogo from '../styles/svgs/nike.svg';

const HeaderLine2 = () => {
  return (
    <>
      <div className='HeaderLine2'>
        <img
          src={nikeLogo}
          className='nike-logo'
          alt='nike-logo'
        />
        <div className='headermenu2'>
          <div className='menuitem2'>New & Featured</div>
          <div className='menuitem2'>Men</div>
          <div className='menuitem2'>Women</div>
          <div className='menuitem2'>Kids</div>
          <div className='menuitem2'>Accessories</div>
          <div className='menuitem2'>Sale</div>
        </div>
        <div className='searchMenu'>
          <svg
            aria-hidden='true'
            class='searchIcon'
            focusable='false'
            viewBox='0 0 24 24'
            role='img'
            width='24px'
            height='24px'
            fill='none'
          >
            <path
              stroke='currentColor'
              stroke-width='1.5'
              d='M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853'
            ></path>
          </svg>
          <input
            type='text'
            id='VisualSearchInput'
            class='pre-search-input headline-5'
            name='search'
            autocomplete='off'
            data-var='vsInput'
            tabindex='0'
            placeholder='Search'
            aria-label='Search Products'
            role='combobox'
            aria-controls='VisualSearchSuggestionsList'
            aria-owns='VisualSearchSuggestionsList'
            aria-expanded='false'
          ></input>
          <svg
            aria-hidden='true'
            class='pre-nav-design-icon'
            focusable='false'
            viewBox='0 0 24 24'
            role='img'
            width='24px'
            height='24px'
            fill='none'
          >
            <path
              stroke='currentColor'
              stroke-width='1.5'
              d='M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451'
            ></path>
          </svg>
          <svg
            aria-hidden='true'
            class='pre-nav-design-icon'
            focusable='false'
            viewBox='0 0 24 24'
            role='img'
            width='24px'
            height='24px'
            fill='none'
          >
            <path
              stroke='currentColor'
              stroke-width='1.5'
              d='M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5'
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default HeaderLine2;
