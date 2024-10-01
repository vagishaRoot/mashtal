import React from 'react'

const Icons = ({ string }) => {
  if(string === "search") {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
    )
  } else if(string === "play") {
    return (
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.0744 18.5C36.0744 28.4546 28.234 36.5 18.592 36.5C8.9501 36.5 1.10971 28.4546 1.10971 18.5C1.10971 8.5454 8.9501 0.5 18.592 0.5C28.234 0.5 36.0744 8.5454 36.0744 18.5Z" fill="#404040" fill-opacity="0.5" stroke="white"/>
          <path d="M27.0743 18.8492L13.842 26.7087L13.842 10.9896L27.0743 18.8492Z" fill="white"/>
        </svg>

    )
  } else if(string === "calendar") {
    return (
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 6.62358V4.20405C13 3.31321 12.3284 2.59104 11.5 2.59104H2.5C1.67157 2.59104 1 3.31321 1 4.20405V6.62358M13 6.62358V13.8821C13 14.773 12.3284 15.4952 11.5 15.4952H2.5C1.67157 15.4952 1 14.773 1 13.8821V6.62358M13 6.62358H1M4 0.978027V4.20405M10 0.978027V4.20405" stroke="black" stroke-linecap="round"/>
        <path d="M4.375 8.23645H2.875C2.66789 8.23645 2.5 8.41699 2.5 8.6397V10.2527C2.5 10.4754 2.66789 10.656 2.875 10.656H4.375C4.58211 10.656 4.75 10.4754 4.75 10.2527V8.6397C4.75 8.41699 4.58211 8.23645 4.375 8.23645Z" fill="black"/>
        <path d="M7.75 8.23645H6.25C6.04289 8.23645 5.875 8.41699 5.875 8.6397V10.2527C5.875 10.4754 6.04289 10.656 6.25 10.656H7.75C7.95711 10.656 8.125 10.4754 8.125 10.2527V8.6397C8.125 8.41699 7.95711 8.23645 7.75 8.23645Z" fill="black"/>
        <path d="M11.125 8.23645H9.625C9.41789 8.23645 9.25 8.41699 9.25 8.6397V10.2527C9.25 10.4754 9.41789 10.656 9.625 10.656H11.125C11.3321 10.656 11.5 10.4754 11.5 10.2527V8.6397C11.5 8.41699 11.3321 8.23645 11.125 8.23645Z" fill="black"/>
      </svg>

    )
  } else if(string === "category") {
    return (
      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.44938 4.43515H4.4567M6.98388 1.24695H4.9986C3.76857 1.24695 3.15355 1.24695 2.68375 1.50436C2.27049 1.73079 1.9345 2.09209 1.72394 2.53649C1.48456 3.04169 1.48456 3.70304 1.48456 5.02574V7.1606C1.48456 7.73821 1.48456 8.02705 1.54524 8.29889C1.59904 8.53986 1.68778 8.77021 1.8082 8.98159C1.94402 9.21989 2.13394 9.4241 2.5138 9.8326L5.95463 13.5327C6.82436 14.4679 7.25929 14.9356 7.7607 15.1108C8.20186 15.2649 8.67699 15.2649 9.11815 15.1108C9.61956 14.9356 10.0545 14.4679 10.9242 13.5327L12.9095 11.3978C13.7792 10.4626 14.2142 9.99486 14.3771 9.45567C14.5204 8.98127 14.5204 8.47035 14.3771 7.99595C14.2142 7.45677 13.7792 6.98906 12.9095 6.0538L9.46867 2.35373C9.08879 1.94526 8.89888 1.74103 8.67728 1.59498C8.48071 1.46548 8.2665 1.37006 8.04241 1.3122C7.78962 1.24695 7.52102 1.24695 6.98388 1.24695ZM4.81543 4.43515C4.81543 4.65255 4.65155 4.82877 4.44938 4.82877C4.24722 4.82877 4.08334 4.65255 4.08334 4.43515C4.08334 4.21776 4.24722 4.04152 4.44938 4.04152C4.65155 4.04152 4.81543 4.21776 4.81543 4.43515Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  } else if(string === "profile") {
    return (
      <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.96607 4.2409C9.96607 5.97545 8.53956 7.38158 6.77993 7.38158C5.02027 7.38158 3.59378 5.97545 3.59378 4.2409C3.59378 2.50635 5.02027 1.10022 6.77993 1.10022C8.53956 1.10022 9.96607 2.50635 9.96607 4.2409Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.77992 9.73706C3.70052 9.73706 1.20416 12.1978 1.20416 15.2333H12.3557C12.3557 12.1978 9.85933 9.73706 6.77992 9.73706Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  } else if(string === "arrow") {
    return (
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4009 4.66691C13.5961 4.47165 13.5961 4.15506 13.4009 3.9598L10.2189 0.777821C10.0236 0.582558 9.70703 0.582558 9.51177 0.777821C9.31651 0.973083 9.31651 1.28967 9.51177 1.48493L12.3402 4.31335L9.51177 7.14178C9.31651 7.33704 9.31651 7.65363 9.51177 7.84889C9.70703 8.04415 10.0236 8.04415 10.2189 7.84889L13.4009 4.66691ZM0.0473022 4.81335H13.0473V3.81335H0.0473022V4.81335Z" fill="#547CC5"/>
      </svg>
    )
  } else if(string === "facebook") {
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="30" height="30" fill="url(#pattern0_2_119)"/>
        <defs>
          <pattern id="pattern0_2_119" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_2_119" transform="scale(0.0078125)"/>
          </pattern>
          <image id="image0_2_119" width="128" height="128" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAqRAAAKkQH94rKBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAmFQTFRF////AQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACQ8tyvQAAAMp0Uk5TAAECAwQFBgcICQoLDA0ODxESExQVFhcZGhscHh8gISIjJCYnKCotLi8wMTIzNTY3ODk6PD0+P0BCQ0RHSElKS0xOUFFTVFVWWFleYGFiZGVmZ2hqa25vcHFyc3R1dnh5ent8fX5/gIGChIeJiouMjY+QkpWWl5iZmp6foqSlpqipqqusrq+wsbKztLW2uLm6u7y/wMHCw8TFxsjJysvMzc7P0NLT1dbX2Nna29zd3t/g4uTl5+jp6uzt7/Dx8vP09fb3+Pn6+/z9/i/pUMoAAAUzSURBVHjaxdvrX1RFGAfw33IVMMFABYEggtRUMLKCIFJQqCgxDMtEMooNtLwEBCQqQsFmKiWGlcZqF5NbFAEtuNFyk935q3oRt+WcszszZ+ac30s+88zzZdkzzJw9C/AlLqvkqPV0w/mOjvMNp61HS7LiYFQicqsu2CeJIpP2C1W5EZKbh+y2ds8RH5nrtj4bIq17fpuLUMTVli/DkFk3TqgzXpcptntY2QBhzEBZmLD2a8tHCUdGy9cKaR9Z6SCccVRG6m5vKeFuTwghjhKLvv47bhGdubVDR/uoWjfRHXdtFG//3DEiJGO5XO2DTniIoHhOBLH333yTCMzNzaz98xxEaBx5bP0PuYnguA+x9LcSCbFStw+oJ1JSH0DXP7SNSEpbKE3/wHYiLe2BFIBGIjGN/vtXE6mp9nv96Zh8xjHtf5CfqzGf6/r33D1VsCt5HYDg9QlPZuYUvv7W+x99OqW+HuT76p/s5Ohu2/+o6mQa2yhnso8L0M6+wLVs1ZpNax9n174Ya5n7f5eq/etobiRrtSoKmfvXBYMDQArVCxJY3wDTr/l8Q2sDnAmqBawroKcAnADSrjZ+D+vrXwVuANmjHB42xNj/c4sOwJDy2FTD2H/Y77HH53GqZvXolFlGQBl0AWZTVo1uZuw/skYfgDR7D06aZwQcgU7AfJKuTcC/4XoB3luDONZ3wBXoBsyuvK11loj/C/gDkLPLQyNdrACtf4HRGa8UL8bfyu5avnlwgLX/36qLUGHPA6ZZDixV3mAFXFNpv4F5N//tYmki8zG4WQXwA+skxPPYQmklc+kZZf9swp4PFmp7mSuPKwFfcwD6/y/dyl55UAng2M4S8hQA4G32wn2K/uE8/ck7AAAbe6Fyb5/MBbgMAIEPRADSuQD/BAHYSUQAdnEBSAaAY2YCKgB8aSbgMoB+MwEDQMi8mYD5EKQRMwEkDQXmAgpQYS6gAk3mApp4FmKRABuu0wyb6fLOMwpA6tXVGaQCdIHqrswfYE8DFcCOPlmATipAH0ZlAehW2FG4JAEC5qgALlCtxEPsgHjKtZhuL8fxCjxHB3BiWBKgmA7wF+5LAnxIB+hFjyTAOTqAHV2SAN10gBtolXQVDNMBvsBJOa9AKOWB9xQOygGkUP43LKU71bIDcigB2UiUAyilBMQjcFYK4CRd/5kA4LYUwCU6wB0AZyjGOYq9E69oGLNqBOVx5xMA+wl7hO0JiwBsMhMQCwCD5gF+BwCek4EowDkAwF7zAEUAgDWTZgEWb/pfMgtwcaH4ZbMAix88rps2B+Bc+typ3hxA01J14kNTANuWyz8zA3B95f7FbQJg78r6i8YD+r2eq9riMRzwpvcEHUYDBlc9fZ1uNEDxGEensYDvFTPsNhbwtHIb2WgkoEVlHxt+3ziAY6PaTnr7rGGAIvW9fLlRgBaNw4TlG2MAo9Fax5k4hxEAz0vaB6oCIwDv+TrSNcoHtPg8U4bfkw246+fxl7heuYCxeH/n6k2/yQSMb/F/st/4qzzAxHaaewsxP8sCONPp7m5E/yQHMEn99av1dhmA4W2gTtSP4gF3mL6RGNkpGmBj/CqipWxKJMDzcQBYk9ojDjCSA44EVc8LAnREgy8ZfSIArlJwJ7xeP6A1Hnry4p/6APeyoTPBr/7CD5g4EgT9seR18QFGjj0CQdnZ6mYGDJaGQmAer5tiATy07QuE4MS8e9tDCbAfjoGUxL7x1Yw/gOtqeRokJiLruG1MCzDRXfN8CAxI0gbFj55oOPxCLM9c/wHf4zB2ujxBdgAAAABJRU5ErkJggg=="/>
        </defs>
      </svg>
    )
  } else if(string === "instagram") {
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="30" height="30" fill="url(#pattern0_2_120)"/>
        <defs>
          <pattern id="pattern0_2_120" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_2_120" transform="scale(0.0078125)"/>
          </pattern>
          <image id="image0_2_120" width="128" height="128" xlink:href="data:image/png;base64,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"/>
        </defs>
      </svg>
    )
  } else if(string === "linkedin") {
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="30" height="30" fill="url(#pattern0_2_121)"/>
        <defs>
          <pattern id="pattern0_2_121" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_2_121" transform="scale(0.0078125)"/>
          </pattern>
          <image id="image0_2_121" width="128" height="128" xlink:href="data:image/png;base64,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"/>
      </defs>
      </svg>

    )
  } else if(string === "youtube") {
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="30" height="30" fill="url(#pattern0_2_122)"/>
        <defs>
          <pattern id="pattern0_2_122" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_2_122" transform="scale(0.0078125)"/>
          </pattern>
          <image id="image0_2_122" width="128" height="128" xlink:href="data:image/png;base64,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"/>
        </defs>
      </svg>
    )
  } else if(string === "line") {
    return (
      <svg width="207" height="12" viewBox="0 0 207 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM195.667 6.00002C195.667 8.94554 198.054 11.3334 201 11.3334C203.946 11.3334 206.333 8.94554 206.333 6.00002C206.333 3.0545 203.946 0.666684 201 0.666684C198.054 0.666683 195.667 3.0545 195.667 6.00002ZM6 7L201 7.00002L201 5.00002L6 5L6 7Z" fill="#DB6D8F"/>
      </svg>
    )
  } else if(string === "photo-film-svg") {
    return (
      <svg width="158" height="126" viewBox="0 0 158 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.2 0H142.2C150.915 0 158 7.06289 158 15.75V70.875C158 79.5621 150.915 86.625 142.2 86.625H63.2C54.4853 86.625 47.4 79.5621 47.4 70.875V15.75C47.4 7.06289 54.4853 0 63.2 0ZM117.513 26.2582C116.402 24.6094 114.55 23.625 112.575 23.625C110.6 23.625 108.748 24.6094 107.638 26.2582L93.8125 46.9301L89.5416 41.5898C88.4059 40.1871 86.7025 39.375 84.925 39.375C83.1475 39.375 81.4194 40.1871 80.3084 41.5898L64.5084 61.2773C63.0766 63.0492 62.805 65.4855 63.7925 67.5281C64.78 69.5707 66.8538 70.875 69.125 70.875H88.875H100.725H136.275C138.472 70.875 140.472 69.6691 141.509 67.7496C142.546 65.8301 142.422 63.4922 141.213 61.6957L117.513 26.2582ZM82.95 23.625C82.95 21.5364 82.1177 19.5334 80.6361 18.0565C79.1546 16.5797 77.1452 15.75 75.05 15.75C72.9548 15.75 70.9454 16.5797 69.4639 18.0565C67.9823 19.5334 67.15 21.5364 67.15 23.625C67.15 25.7136 67.9823 27.7166 69.4639 29.1935C70.9454 30.6703 72.9548 31.5 75.05 31.5C77.1452 31.5 79.1546 30.6703 80.6361 29.1935C82.1177 27.7166 82.95 25.7136 82.95 23.625ZM15.8 31.5H39.5V94.5V102.375C39.5 106.731 43.0303 110.25 47.4 110.25H79C83.3697 110.25 86.9 106.731 86.9 102.375V94.5H126.4V110.25C126.4 118.937 119.315 126 110.6 126H15.8C7.08531 126 0 118.937 0 110.25V47.25C0 38.5629 7.08531 31.5 15.8 31.5ZM17.775 47.25C15.6025 47.25 13.825 49.0219 13.825 51.1875V55.125C13.825 57.2906 15.6025 59.0625 17.775 59.0625H21.725C23.8975 59.0625 25.675 57.2906 25.675 55.125V51.1875C25.675 49.0219 23.8975 47.25 21.725 47.25H17.775ZM17.775 72.8438C15.6025 72.8438 13.825 74.6156 13.825 76.7812V80.7188C13.825 82.8844 15.6025 84.6562 17.775 84.6562H21.725C23.8975 84.6562 25.675 82.8844 25.675 80.7188V76.7812C25.675 74.6156 23.8975 72.8438 21.725 72.8438H17.775ZM17.775 98.4375C15.6025 98.4375 13.825 100.209 13.825 102.375V106.312C13.825 108.478 15.6025 110.25 17.775 110.25H21.725C23.8975 110.25 25.675 108.478 25.675 106.312V102.375C25.675 100.209 23.8975 98.4375 21.725 98.4375H17.775ZM100.725 102.375V106.312C100.725 108.478 102.503 110.25 104.675 110.25H108.625C110.798 110.25 112.575 108.478 112.575 106.312V102.375C112.575 100.209 110.798 98.4375 108.625 98.4375H104.675C102.503 98.4375 100.725 100.209 100.725 102.375Z" fill="#EAEAEA"/>
      </svg>
    )
  } else if(string === "video") {
    return (
      <svg width="208" height="139" viewBox="0 0 208 139" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M209 23.1667C209 10.3888 198.586 0 185.778 0H92.8889C80.0804 0 69.6667 10.3888 69.6667 23.1667V115.833C69.6667 128.611 80.0804 139 92.8889 139H185.778C198.586 139 209 128.611 209 115.833V23.1667ZM6.13214 12.9589C2.35854 14.9859 0 18.8953 0 23.1667V115.833C0 120.105 2.35854 124.014 6.13214 126.041C9.90576 128.068 14.4776 127.851 18.0698 125.462L52.9031 102.295L58.0556 98.8565V92.6667V46.3333V40.1435L52.9031 36.7047L18.0698 13.538C14.5139 11.1852 9.94205 10.9318 6.13214 12.9589Z" fill="#EAEAEA"/>
      </svg>

    )
  }
}

export default Icons