import s from './NotContent.module.scss'

export function NotContent() {
    return (
        <div className={s.content}>
            <h2 className={s.content__title}>Тут пока ничего нет, но вы можете добавить сюда что-то</h2>
        </div>
    );
};