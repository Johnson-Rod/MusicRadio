import React from 'react'
import bindClass from 'classnames'

import styles from './index.less'
import SignalIcon from '@/components/signalIcon';
import globalConfigs from '@global/common/config';
import CustomIcon from '@/components/CustomIcon';

interface Props {
    pic: string;
    playing: string;
    title: string;
    heat: number;
    onClick?: () => any;
    width?: string | number;
    id: string;
    className?: string;
}

const RoomItemShow: React.FC<Props> = (props) => {
    const { pic, playing, title, heat = 0, id, className } = props
    return <div className={bindClass(styles.roomItem, className || '')} onClick={props.onClick || null}>
        <div className={styles.main}>
            <div className={styles.background}>
                {
                    !!pic ? <img src={pic}/> : <div className={styles.noData}>暂无播放</div>}
            </div>
            <div className={styles.heat}><CustomIcon>persons</CustomIcon><span>{heat}</span></div>
            {!!playing && <div className={styles.playing}>
                <SignalIcon />
                <div className={styles.text} title={playing}>正在播放: {playing || '暂无'}</div>
            </div>}
            <div className={styles.playIcon}>
                <CustomIcon>play-circle</CustomIcon>
            </div>
        </div>
        <div className={styles.title} title={title}>{title || (id === globalConfigs.hallRoomId ? '大厅' : '未命名')}</div>
    </div>
}

export default RoomItemShow
