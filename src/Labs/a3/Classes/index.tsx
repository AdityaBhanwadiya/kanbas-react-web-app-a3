import './index.css';

function Classes() {
    const color = 'blue';
    const danger = true;
    return (
        <div>
            <h2>Classes</h2>
            <div className={`${danger ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
                Danger Background
            </div>
        </div>);
}
export default Classes;