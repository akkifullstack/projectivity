import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import { nav } from "./common";
import Tooltip from "react-tooltip-lite";
import Link from "next/link";
import css from "../static/css/nav.css";
import { Button } from "react-bootstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "react-bootstrap";

const Sidenav = () => {
  let router = useRouter();
  const [active, setActive] = useState(false);
  const [activekey, setKeyActive] = useState(0);
  const [toggleActive, settoggleActive] = useState(false);
  return (
    <>
      <div class="">
        <ul class="navbar-nav">
          <div class="logo">
            <i class="far fa-user-circle"></i>
          </div>
          {nav.map((navitem, key) => {
            return (
              <>
                <Navbar
                  bg={
                    activekey == navitem.key && active
                      ? "light active"
                      : "light"
                  }
                >
                  <Navbar.Brand>
                    <Tooltip content={navitem.name} direction="right">
                      <div class="circle">
                        <i
                          class={navitem.class}
                          onClick={() => {
                            setActive(true);
                            setKeyActive(navitem.key);
                          }}
                        />
                      </div>
                    </Tooltip>
                  </Navbar.Brand>
                </Navbar>
                <br />
              </>
            );
          })}
          <div class="more-icon">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                class="btn-basic"
              >
                <i
                  class="fas fa-ellipsis-h"
                  onClick={() => settoggleActive(!toggleActive)}
                ></i>
              </Dropdown.Toggle>
              {toggleActive ? (
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              ) : (
                ""
              )}
            </Dropdown>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidenav;
