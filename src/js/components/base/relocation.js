import $ from 'jquery'

export const linksRelocation = (cls) => {
  const links = $('a');
  const container = $('.site-container');

  links.on('click', function (e) {
    let href = $(this).attr('href');
    container.addClass(cls);
    setTimeout(function () {
      return location.href = href;
    }, 500);

    return false;
  })
}
