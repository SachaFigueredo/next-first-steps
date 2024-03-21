import type { Metadata} from 'next';

export const metadata: Metadata = {
    title: 'contact',
    description: 'contact title',
};

export default function Contact() {
    return (
        <>
            <span className='text-7xl'>Contact</span>
        </>
    )
}