import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery-item">
	<a class="gallery-link" href='${original}'>
		<img 
			class="gallery-image" 
			src='${preview}'
			alt='${description}' 
			/>
	</a>
</li>`;
  })
  .join('');

galleryEl.innerHTML = galleryMarkup;

const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
