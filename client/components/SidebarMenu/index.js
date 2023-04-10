import React, {useState} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import {Collapse} from "reactstrap";
import {useRouter} from "next/router";

const SidebarMenu = ({menus, sideShow, setSideShow, className}) => {
    const [sMenu, setSMenu] = useState(null);
    const [stMenu, setSTMenu] = useState(null);
    const router = useRouter()

    return (
        <div className={`sidebarMenu ${sideShow ? '' : 'hideSideMenu'} ${className ? className : ''}`}>
            <span className="clox" onClick={() => setSideShow(false)}>Close</span>
            <ul className="navBar">
                {menus.length > 0 ? menus.map((item, i) => (
                    <li key={i}
                        className={`${item.child ? 'has_sub' : ''}`}>
                        {item.child ?
                            <p
                                onClick={() => setSMenu(item.id === sMenu ? null : item.id)}
                                className={sMenu === item.id ? 'active' : ''}
                            >{item.linkText}
                                <FontAwesome
                                    name={sMenu === item.id ? 'angle-down active' : 'angle-down'}/></p>
                            : <a exact className={sMenu === item.id ? 'active' : ''}
                                       onClick={() => router.push(item.link)}>{item.linkText}</a>}
                        {item.child ?
                            <Collapse isOpen={sMenu === item.id}>
                                <ul className="subMenu">
                                    {item.submenu.map((sub_item, i) => (
                                        <li key={i}
                                            className={`${sub_item.child ? 'has_sub' : ''}`}>
                                            {sub_item.child ?
                                                <p
                                                    onClick={() => setSTMenu(sub_item.id === stMenu ? null : sub_item.id)}
                                                    className={stMenu === sub_item.id ? 'active' : ''}
                                                >{sub_item.linkText}
                                                    <FontAwesome
                                                        name={stMenu === sub_item.id ? 'angle-down active' : 'angle-down'}/>
                                                </p>
                                                : <a exact
                                                    onClick={() => router.push(sub_item.link)}>{sub_item.linkText}</a>}
                                            {sub_item.third_menu ?
                                                <Collapse isOpen={stMenu === sub_item.id}>
                                                    <ul className="thirdMenu">
                                                        {sub_item.third_menu.map((third_item, i) => (
                                                            <li key={i}><a
                                                                onClick={() => router.push(third_item.link)}>{third_item.linkText}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Collapse> : null}
                                        </li>
                                    ))}
                                </ul>
                            </Collapse>
                            : null
                        }
                    </li>
                )) : null}
            </ul>
        </div>
    );
};

export default SidebarMenu;