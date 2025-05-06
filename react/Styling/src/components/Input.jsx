
export default function Input({label,invalid, ...props}){
    return <p>
        <input className="w-full px-3 py-2 leading-tight bg-stone-300 text-gray-700 border rounded shadow"{...props}  />
        <label className="block mb-2 text-xs font-bold tracking-wide text-stone-200 uppercase">{label}</label>
    </p>

}
// we can use conditional styles using tailwind 
// let labelclasses ='block mb-2 text-xs font-bold tracking-wide  uppercase';
// let inputClasses ='w-full px-3 py-2 leading-tight  border rounded shadow';
// if(invalid){
//   labelclasses +=' text-red-400';
//   inputClasses +=' bg-red-100 text-red-500';
// }else{
//   labelclasses +=' text-stone-200';
//   inputClasses +=' bg-stone-300 text-gray-700';
// }
// we added for invalid class as change colour to red