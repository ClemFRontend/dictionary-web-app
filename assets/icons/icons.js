import Svg, { Path, G, Circle } from 'react-native-svg';

export function Logo(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 34 38">
            <G fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5">
                <Path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
                <Path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
                <Path d="M11 9h12" />
            </G>
        </Svg>
    )
}

export function IconArrowDown(props) {
    return (
        <Svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 14 8">
            <Path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6" />
        </Svg>
    )
}

export function IconMoon(props) {
    return (
        <Svg {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <Path fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" />
        </Svg>
    )
}

export function IconMagnify(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="15.5" viewBox="0 0 18 18">
            <Path fill="none" stroke="#A445ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z" />
        </Svg>
    )
}

export function IconCross(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" fill={props.color} id="Outline" viewBox="0 0 24 24" width="20" height="20">
            <Path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
        </Svg>
    )
}

export function IconPlay({ children, ...props }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 75 75">
            <G fill="#A445ED" fill-rule="evenodd">
                <Circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                {children}
            </G>
        </Svg>
    )
}

export function IconNewWindow(props) {
    return (
        <Svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14">
            <Path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5" />
        </Svg>
    )
}