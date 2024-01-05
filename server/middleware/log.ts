export default defineEventHandler((event) => {
    console.log(event.method + ' request to: ' + event.path);
});