import Props from './typescript';

declare module 'MyComponent' {
    interface LayoutProps {
        children: Props
    }
}