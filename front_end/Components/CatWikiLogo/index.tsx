import React, { FC } from 'react';
import Link from 'next/link';



interface CatWikiLogoProps {
  fill?: string;
}

export const CatWikiLogo: FC<CatWikiLogoProps> = ({ fill }) => (
  <Link href="/">
      <svg
        width={128}
        height={43}
        fill={fill || '#FFFFFF'}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6.938 34.688c-.875-.032-1.727-.274-2.555-.727-.813-.438-1.531-1.07-2.156-1.898-.61-.844-1.086-1.876-1.43-3.094C.453 27.75.312 26.344.375 24.75c.063-1.594.344-3.008.844-4.242.515-1.235 1.148-2.258 1.898-3.07.75-.829 1.57-1.438 2.461-1.829.906-.39 1.797-.539 2.672-.445.531.063 1 .211 1.406.445.406.235.758.524 1.055.868.297.328.547.687.75 1.078.203.375.367.742.492 1.101.094.094.195.14.305.14.297.017.562-.202.797-.655.25-.47.46-1.235.633-2.297l.656.07c-.14.531-.297 1.149-.469 1.852a63.705 63.705 0 0 0-.445 2.132 56.603 56.603 0 0 0-.328 2.18 12.099 12.099 0 0 0-.07 1.945 3.02 3.02 0 0 0-.657-.187 4.221 4.221 0 0 0-.563-.094 2.84 2.84 0 0 0-.515 0c.031-.969 0-1.898-.094-2.789-.078-.89-.234-1.672-.469-2.344-.234-.687-.546-1.242-.937-1.664a2.044 2.044 0 0 0-1.406-.703c-.5-.047-1.04.063-1.618.328-.578.25-1.125.711-1.64 1.383-.516.656-.961 1.54-1.336 2.649-.375 1.109-.61 2.492-.703 4.148a16.7 16.7 0 0 0 .094 2.766c.109.968.328 1.867.656 2.695.328.812.773 1.492 1.336 2.039.562.531 1.273.79 2.133.773a4.568 4.568 0 0 0 1.828-.515c.484-.266.96-.664 1.43-1.196.468-.53.804-1.296 1.007-2.296l.774.468c-.125.407-.313.914-.563 1.524a7.69 7.69 0 0 1-1.031 1.734 5.33 5.33 0 0 1-1.594 1.406c-.625.391-1.367.57-2.226.54Zm19.054-2.555c-.047.203-.125.43-.234.68-.11.234-.266.445-.469.632a1.814 1.814 0 0 1-.75.446c-.281.109-.617.117-1.008.023a1.537 1.537 0 0 1-.937-.656c-.219-.344-.375-.781-.469-1.313a6.06 6.06 0 0 1-.54.703 3.344 3.344 0 0 1-.75.633 3.19 3.19 0 0 1-.983.469c-.36.125-.758.172-1.196.14a3.601 3.601 0 0 1-1.593-.492 3.816 3.816 0 0 1-1.149-1.03 4.775 4.775 0 0 1-.703-1.477 4.798 4.798 0 0 1-.117-1.711c.062-.594.219-1.102.469-1.524.265-.422.593-.758.984-1.008.39-.265.836-.445 1.336-.539a5.656 5.656 0 0 1 1.547-.07c.703.078 1.289.29 1.758.633.468.328.828.695 1.078 1.101.078-.718.101-1.484.07-2.296a8.255 8.255 0 0 0-.375-2.25c-.219-.688-.555-1.25-1.008-1.688-.453-.453-1.07-.672-1.851-.656-.547 0-1 .101-1.36.305a2.834 2.834 0 0 0-.844.68 2.416 2.416 0 0 0-.421.82 2.386 2.386 0 0 0-.118.632c0 .157.047.336.141.54.094.187.227.367.398.538.172.157.375.282.61.375.234.094.5.118.797.07a1.26 1.26 0 0 0 .539-.21c.156-.11.281-.235.375-.375.093-.14.156-.29.187-.445a1.55 1.55 0 0 0 .07-.446.59.59 0 0 0-.14-.398.93.93 0 0 0-.328-.282.64.64 0 0 0-.422-.046.683.683 0 0 0-.422.21.696.696 0 0 1 .422.094c.14.063.21.203.21.422 0 .172-.07.305-.21.399a.794.794 0 0 1-.469.093.803.803 0 0 1-.469-.21c-.14-.141-.21-.352-.21-.633 0-.266.109-.493.328-.68.234-.188.5-.281.797-.281.359 0 .687.14.984.422.312.28.469.671.469 1.171 0 .172-.047.36-.141.563a1.686 1.686 0 0 1-.375.539 2.23 2.23 0 0 1-.68.445c-.28.11-.61.164-.984.164-.375 0-.711-.07-1.008-.21a2.772 2.772 0 0 1-.75-.563 2.73 2.73 0 0 1-.469-.75 2.521 2.521 0 0 1-.14-.797c0-.25.078-.562.234-.937.156-.391.399-.758.727-1.102.343-.344.765-.64 1.265-.89.516-.25 1.125-.376 1.828-.376 1.891 0 3.196.664 3.915 1.993.718 1.312.835 3.273.351 5.882-.187 1.047-.289 1.899-.305 2.555-.015.656.024 1.18.118 1.57.093.391.226.664.398.82.188.157.383.25.586.282a.877.877 0 0 0 .492-.047.76.76 0 0 0 .352-.21c.125-.126.21-.313.258-.563l.304.117Zm-3.96-1.196c-.016-.562.007-1.156.07-1.78-.125-.485-.383-.93-.774-1.337-.375-.422-.805-.672-1.289-.75a3.039 3.039 0 0 0-1.125.024 2.315 2.315 0 0 0-1.008.422 2.06 2.06 0 0 0-.703.867c-.172.375-.234.836-.187 1.383.078.843.312 1.484.703 1.922.406.437 1 .632 1.781.585.594-.03 1.094-.18 1.5-.445a4.927 4.927 0 0 0 1.031-.89Zm9.538 1.29c.36 0 .696-.125 1.008-.375.313-.25.531-.672.656-1.266l.493.187c-.047.375-.196.758-.446 1.149-.25.375-.57.695-.96.96-.391.266-.837.438-1.337.516-.484.079-.984 0-1.5-.234-.562-.266-.968-.61-1.218-1.031a3.621 3.621 0 0 1-.47-1.453 9.854 9.854 0 0 1-.023-1.805c.047-.656.07-1.336.07-2.04 0-.405-.007-.882-.023-1.429 0-.562-.015-1.156-.047-1.781a41.499 41.499 0 0 0-.093-1.922l-.14-1.969c-.532.063-1.04.141-1.524.235-.47.078-.868.18-1.196.304a1.133 1.133 0 0 1 0-.328c0-.078.008-.148.024-.21V19.5a2.02 2.02 0 0 0-.047-.375c.375-.031.789-.063 1.242-.094l1.43-.093-.047-.633a7.885 7.885 0 0 0-.07-.633c-.079-.735-.227-1.32-.446-1.758-.203-.437-.43-.773-.68-1.008-.25-.234-.484-.39-.703-.469a4.598 4.598 0 0 0-.492-.187l.07-.445c.297.125.665.21 1.102.258.438.03.89.03 1.36 0 .484-.047.953-.126 1.406-.235.468-.11.875-.25 1.218-.422-.156.438-.296 1.133-.421 2.086a64.37 64.37 0 0 0-.282 3.328c.813-.047 1.399-.11 1.758-.187-.078.094-.117.25-.117.469 0 .203.023.39.07.562a7.217 7.217 0 0 0-.843-.047 17.426 17.426 0 0 0-.915-.023 79.22 79.22 0 0 0-.093 2.836c-.016.984-.008 1.96.023 2.93.047.953.11 1.89.188 2.812.093.906.21 1.742.351 2.508.125.547.344.937.657 1.172.312.234.648.359 1.007.375Zm22.266-14.414c-.328.218-.648.46-.961.726-.313.266-.586.61-.82 1.031-.235.422-.414.953-.54 1.594-.124.625-.156 1.422-.093 2.39.031.641.062 1.337.094 2.087.047.734.054 1.476.023 2.226s-.117 1.477-.258 2.18a5.844 5.844 0 0 1-.703 1.851 3.974 3.974 0 0 1-1.312 1.336c-.547.344-1.235.532-2.063.563-.61.031-1.148-.055-1.617-.258a3.976 3.976 0 0 1-1.195-.82 5.058 5.058 0 0 1-.82-1.219 9.55 9.55 0 0 1-.54-1.453c-.234.64-.515 1.234-.843 1.781a3.71 3.71 0 0 1-1.243 1.313c-.5.343-1.11.539-1.828.586-.703.062-1.554-.079-2.554-.422-.735-.25-1.313-.61-1.735-1.078a4.819 4.819 0 0 1-.937-1.618 7.031 7.031 0 0 1-.352-1.898 16.539 16.539 0 0 1 .234-3.633A57.355 57.355 0 0 0 34.36 21c.11-.906.125-1.71.047-2.414-.078-.719-.281-1.313-.61-1.781-.312-.485-.812-.805-1.5-.961l.118-.469c.297.047.648.102 1.055.164.406.063.828.117 1.265.164.438.031.868.047 1.29.047a6.336 6.336 0 0 0 1.171-.14c-.078.609-.187 1.367-.328 2.273a170.384 170.384 0 0 0-.726 5.976 41.007 41.007 0 0 0-.164 2.953c-.047 1.86.164 3.22.632 4.079.485.859 1.328 1.28 2.532 1.265.609-.015 1.101-.281 1.476-.797.375-.515.664-1.156.867-1.922.22-.765.368-1.578.446-2.437a53.06 53.06 0 0 0 .164-2.39c.015-.72.015-1.415 0-2.087a17.163 17.163 0 0 0-.14-1.898 9.563 9.563 0 0 0-.329-1.547c-.125-.469-.281-.844-.469-1.125a8.477 8.477 0 0 1 1.125.024c.313.03.602.07.867.117.282.031.57.054.868.07.297.016.648-.016 1.054-.094a19.514 19.514 0 0 0-.844 3.188c-.093.61-.171 1.289-.234 2.039a39.77 39.77 0 0 0-.07 2.508c.016.937.062 1.789.14 2.554.094.766.25 1.414.47 1.946.234.515.546.898.937 1.148.406.235.93.29 1.57.164.64-.14 1.14-.46 1.5-.96.36-.5.617-1.118.773-1.852.172-.735.266-1.555.282-2.461.031-.922.031-1.86 0-2.813a30.287 30.287 0 0 0-.164-2.46c-.078-.688-.203-1.25-.375-1.688-.157-.438-.36-.766-.61-.985a1.74 1.74 0 0 0-.914-.445l.07-.515c.954.156 1.938.21 2.954.164a16.192 16.192 0 0 0 3.187-.54l.094.75Zm0 15.07a2.695 2.695 0 0 0 1.43-1.102c.156-.234.257-.476.304-.726.344-1.594.516-3.11.516-4.547 0-1.453-.11-2.695-.328-3.727a2.71 2.71 0 0 0-.352-.914 2.535 2.535 0 0 0-.586-.656c-.25-.219-.57-.36-.96-.422l-.024-.375c.312.031.602.055.867.07h1.383c.187.016.375.024.562.024.172.015.344.023.516.023.188 0 .367.016.54.047-.048.563-.087 1.14-.118 1.735a76.822 76.822 0 0 0-.07 1.57 27.995 27.995 0 0 0-.047 1.594 61.13 61.13 0 0 0-.07 1.898c-.016.672-.008 1.313.023 1.922.031.61.086 1.148.164 1.617.078.453.203.75.375.89.094.063.219.126.375.188.125.063.289.125.492.188.219.062.484.125.797.187l.023.399a8.93 8.93 0 0 0-.914 0h-.75c-.265.015-.515.023-.75.023-.328.016-.68.047-1.054.094-.313.031-.664.07-1.055.117-.39.047-.766.102-1.125.164l-.164-.281Zm2.414-14.04c-.484.032-.86-.077-1.125-.327-.266-.266-.414-.563-.445-.891a1.306 1.306 0 0 1 .258-.914c.218-.297.562-.477 1.03-.54.485-.062.868.04 1.15.306.296.265.468.57.515.914.047.328-.04.648-.258.96-.219.297-.594.462-1.125.493ZM71.344 38.93a5.223 5.223 0 0 1-1.617-.258 3.301 3.301 0 0 1-1.383-.867c-.39-.39-.68-.922-.867-1.594-.188-.656-.211-1.477-.07-2.461.109-.75.195-1.484.257-2.203a12.92 12.92 0 0 0 .07-2.016c-.03-.625-.14-1.172-.328-1.64a2.248 2.248 0 0 0-.914-1.125c-.39-.266-.898-.422-1.523-.47-.625-.046-1.383.063-2.274.329.032.672.07 1.305.117 1.898.063.594.133 1.125.211 1.594.047.469.133.875.258 1.219.094.297.227.562.399.797.172.234.39.32.656.258l-.164.586a5.012 5.012 0 0 0-1.078-.235 6.739 6.739 0 0 0-1.266-.023 9.278 9.278 0 0 0-1.406.21c-.469.11-.922.274-1.36.493l-.117-.399c.235-.171.446-.328.633-.468.188-.14.352-.32.492-.54.157-.218.29-.5.399-.843.11-.344.203-.805.281-1.383.078-.578.172-1.328.281-2.25.125-.937.235-1.945.328-3.023.094-1.078.157-2.188.188-3.328.031-1.141 0-2.204-.094-3.188a11.426 11.426 0 0 0-.422-1.992 4.207 4.207 0 0 0-.304-.727 2.72 2.72 0 0 0-.399-.656 2.005 2.005 0 0 0-.539-.492 1.273 1.273 0 0 0-.633-.211v-.352c.297.047.633.102 1.008.164.39.047.828.079 1.313.094.5.016 1.054-.008 1.664-.07.625-.078 1.32-.227 2.086-.445v.468c-.282.156-.54.32-.774.492a2.49 2.49 0 0 0-.656.68c-.188.297-.352.688-.492 1.172s-.242 1.125-.305 1.922c-.078.75-.164 1.617-.258 2.601-.078.985-.117 2-.117 3.047v1.149c0 .375.016.75.047 1.125a8.163 8.163 0 0 0 2.016-1.032 9.87 9.87 0 0 0 1.5-1.335c.406-.47.718-.922.937-1.36.219-.437.328-.812.328-1.125a2.499 2.499 0 0 0-.164-.633 1.27 1.27 0 0 0-.352-.422c-.156-.14-.367-.218-.632-.234l.07-.586c.969.125 1.898.18 2.79.164a7.246 7.246 0 0 0 2.67-.633l.095.47c-.235.109-.446.218-.633.327-.188.094-.367.211-.54.352-.155.14-.312.328-.468.562a7.455 7.455 0 0 0-.516.868c-.14.296-.328.64-.562 1.03-.234.391-.516.782-.844 1.173-.312.375-.68.734-1.101 1.078a5.5 5.5 0 0 1-1.336.797c1.25-.032 2.226.297 2.93.984.703.672 1.1 1.79 1.195 3.352a9.781 9.781 0 0 1-.211 2.414c-.172.797-.32 1.547-.446 2.25-.125.718-.171 1.36-.14 1.922.031.578.265 1.03.703 1.359.422.328.836.523 1.242.586.422.078.813.047 1.172-.094.36-.125.672-.344.938-.656.28-.313.5-.68.656-1.102.14-.422.203-.789.187-1.101a1.567 1.567 0 0 0-.21-.75 1.17 1.17 0 0 0-.493-.422 1.343 1.343 0 0 0-.61-.14c-.437 0-.827.163-1.171.491-.344.329-.531.758-.563 1.29a.876.876 0 0 0 .07.468c.063.125.141.219.235.282.11.078.219.132.328.164a.671.671 0 0 0 .352 0c.203-.032.406-.149.61-.352a.886.886 0 0 0 .304-.727c-.094.063-.211.118-.352.164a.983.983 0 0 1-.398.094.467.467 0 0 1-.305-.117c-.078-.062-.117-.187-.117-.375 0-.219.078-.39.234-.516.172-.109.36-.164.563-.164.203 0 .39.063.562.188.172.14.258.344.258.61.016.515-.156.945-.516 1.288-.343.36-.75.54-1.218.54-.344 0-.617-.102-.82-.305a1.567 1.567 0 0 1-.399-.727 2.361 2.361 0 0 1 0-.937 2.78 2.78 0 0 1 .422-.961c.203-.282.469-.524.797-.727.344-.187.75-.281 1.219-.281.328 0 .601.062.82.187a1.5 1.5 0 0 1 .515.47c.141.202.243.421.305.655.063.235.094.47.094.703.016.454-.047.883-.188 1.29-.14.421-.351.796-.632 1.125a2.937 2.937 0 0 1-1.055.773c-.422.203-.906.305-1.453.305Zm.351-6.047a2.693 2.693 0 0 0 1.43-1.102c.156-.234.258-.476.305-.726.343-1.594.515-3.11.515-4.547 0-1.453-.11-2.695-.328-3.727a2.71 2.71 0 0 0-.351-.914 2.535 2.535 0 0 0-.586-.656c-.25-.219-.57-.36-.961-.422l-.024-.375c.313.031.602.055.868.07H73.945c.188.016.375.024.563.024.172.015.344.023.515.023.188 0 .368.016.54.047-.047.563-.086 1.14-.118 1.735a76.822 76.822 0 0 0-.07 1.57 27.997 27.997 0 0 0-.047 1.594c-.031.578-.055 1.21-.07 1.898-.016.672-.008 1.313.023 1.922.031.61.086 1.148.164 1.617.078.453.203.75.375.89.094.063.22.126.375.188.125.063.29.125.493.188.218.062.484.125.796.187l.024.399a8.93 8.93 0 0 0-.914 0h-.75c-.266.015-.516.023-.75.023-.328.016-.68.047-1.055.094-.312.031-.664.07-1.055.117-.39.047-.765.102-1.125.164l-.164-.281Zm2.414-14.04c-.484.032-.859-.077-1.125-.327-.265-.266-.414-.563-.445-.891a1.306 1.306 0 0 1 .258-.914c.219-.297.562-.477 1.031-.54.484-.062.867.04 1.149.306.296.265.468.57.515.914.047.328-.039.648-.258.96-.218.297-.593.462-1.125.493ZM120.65 25.886l-1.04 3.12-1.04 3.954s-2.705 1.456-2.913.416c-.208-1.04 1.04-1.249 1.04-1.249l.416-2.08-3.12-5.617 6.657 1.456Z'
          fill={fill}
        />
        <path
          d='m120.65 25.886-1.04 3.12-1.04 3.954s-2.705 1.456-2.913.416c-.208-1.04 1.04-1.249 1.04-1.249l.416-2.08-3.12-5.617 6.657 1.456ZM102.966 24.638l-1.872 8.53s-1.457.832-2.497.416c-1.04-.416.624-1.456.624-1.456s-.624-5.201-3.745-5.826c-3.12-.624 7.49-1.664 7.49-1.664Z'
          fill={fill}
        />
        <path
          d='m102.966 24.638-1.872 8.53s-1.457.832-2.497.416c-1.04-.416.624-1.456.624-1.456s-.624-5.201-3.745-5.826c-3.12-.624 7.49-1.664 7.49-1.664Z'
          fill={fill}
        />
        <path
          d='M90.691 14.652s4.161 1.456 7.906.624c0 0 7.282-1.04 7.906-1.248.624-.209 7.698-.625 11.442 0 0 0 10.403-8.114 4.578-11.651 0 0-2.497 1.248-3.121.416-.234-.312-.117-.712.12-1.09a3.025 3.025 0 0 1 2.462-1.367c2.174-.081 6.07.7 4.302 7.808a13.827 13.827 0 0 1-2.72 5.349c-.948 1.168-1.928 2.784-1.46 4.071.833 2.289 1.041 5.826 1.041 5.826l2.912 4.369s1.665 5.409 1.665 5.617c0 .208-2.264.65-2.705.208-.416-.416.624-1.248.624-1.248s-.832-1.665-2.288-2.08c-1.457-.417-5.41-1.873-6.034-2.497-.624-.625-13.939-4.37-17.684-.832a70.627 70.627 0 0 1-6.657 5.617S91.94 34 90.69 34c-1.248 0-1.456-1.872 0-2.08 1.457-.209 3.537-5.202 3.537-5.202s.624-3.744-2.496-4.369c-1.72-.344-2.746-.372-3.32-.327a1.71 1.71 0 0 1-1.27-.42 7.323 7.323 0 0 1-.992-1.178.828.828 0 0 1-.102-.754c.277-.757.508-1.53.69-2.314.208-1.04 1.873-1.872 1.873-1.872s.416-2.913 1.04-2.08c.32.437.667.854 1.04 1.248Z'
          fill={fill}
        />
        <path
          d='M90.691 14.652s4.161 1.456 7.906.624c0 0 7.282-1.04 7.906-1.248.624-.209 7.698-.625 11.442 0 0 0 10.403-8.114 4.578-11.651 0 0-2.497 1.248-3.121.416-.234-.312-.117-.712.12-1.09a3.025 3.025 0 0 1 2.462-1.367c2.174-.081 6.07.7 4.302 7.808a13.827 13.827 0 0 1-2.72 5.349c-.948 1.168-1.928 2.784-1.46 4.071.833 2.289 1.041 5.826 1.041 5.826l2.912 4.369s1.665 5.409 1.665 5.617c0 .208-2.264.65-2.705.208-.416-.416.624-1.248.624-1.248s-.832-1.665-2.288-2.08c-1.457-.417-5.41-1.873-6.034-2.497-.624-.625-13.939-4.37-17.684-.832a70.627 70.627 0 0 1-6.657 5.617S91.94 34 90.69 34c-1.248 0-1.456-1.872 0-2.08 1.457-.209 3.537-5.202 3.537-5.202s.624-3.744-2.496-4.369c-1.72-.344-2.746-.372-3.32-.327a1.71 1.71 0 0 1-1.27-.42 7.323 7.323 0 0 1-.992-1.178.828.828 0 0 1-.102-.754c.277-.757.508-1.53.69-2.314.208-1.04 1.873-1.872 1.873-1.872s.416-2.913 1.04-2.08c.32.437.667.854 1.04 1.248Z'
          fill={fill}
        />
      </svg>
  </Link>
);