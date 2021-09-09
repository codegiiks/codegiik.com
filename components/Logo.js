import * as React from "react"
import colors from 'styles/colors'

function Logo(props) {
    let logoColors = props.colors

    if (props.theme) {
        if (props.theme == 'light') {
            logoColors = {
                dots: colors.warmGray[100],
                first: colors.warmGray[100],
                second: colors.warmGray[100]
            }
        } else if (props.theme == 'dark') {
            logoColors = {
                dots: colors.secondary[800],
                first: colors.tertiary[500],
                second: colors.primary[500]
            }
        } else {
            logoColors = {
                dots: colors.secondary.DEFAULT,
                first: colors.secondary.DEFAULT,
                second: colors.secondary.DEFAULT
            }
        }
    } else if (!props.colors) {
        logoColors = {
            dots: colors.secondary.DEFAULT,
            first: colors.tertiary.DEFAULT,
            second: colors.primary.DEFAULT
        }
    }

    return (
        <svg
            width={props.height * 2.095 || props.width || 352}
            height={props.width * 0.477 || props.height || 168}

            viewBox="0 0 352 168"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M78.7499 128.625C78.7499 106.879 61.1211 89.2501 39.375 89.2501C17.6288 89.2501 0 106.879 0 128.625C0 150.371 17.6288 168 39.375 168C61.1211 168 78.7499 150.371 78.7499 128.625Z"
                fill={logoColors.dots}
            />
            <path
                d="M351.75 128.625C351.75 106.879 334.121 89.2501 312.375 89.2501H128.625C106.879 89.2501 89.25 106.879 89.25 128.625C89.25 150.371 106.879 168 128.625 168H312.375C334.121 168 351.75 150.371 351.75 128.625Z"
                fill={logoColors.second}
            />
            <path
                d="M273 39.375C273 17.6288 290.628 0 312.374 0C334.121 0 351.749 17.6288 351.749 39.375C351.749 61.1211 334.121 78.7499 312.374 78.7499C290.628 78.7499 273 61.1211 273 39.375Z"
                fill={logoColors.dots}
            />
            <path
                d="M0 39.375C0 17.6288 17.6288 0 39.375 0H223.125C244.871 0 262.5 17.6288 262.5 39.375C262.5 61.1211 244.871 78.7499 223.125 78.7499H39.3749C17.6287 78.7499 0 61.1211 0 39.375Z"
                fill={logoColors.first}
            />
        </svg>
    )
}

export default Logo