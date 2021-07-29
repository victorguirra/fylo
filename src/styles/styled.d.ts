import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;

            background_intro: string;
            background_main: string;
            background_footer: string;
            background_testimonials: string;

            cta_first_gradient: string;
            cta_second_gradient: string;
            
            error: string;
        }
    }
}