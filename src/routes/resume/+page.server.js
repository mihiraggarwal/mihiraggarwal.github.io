import { redirect } from '@sveltejs/kit';
 
export function load() {
    throw redirect(302, 'https://drive.google.com/file/d/1tNOujH84bdQ_IUFzH06oEEnXA8NGb4la/view?usp=sharing'); 
}