import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import { nav } from "./common";
import Tooltip from "react-tooltip-lite";
const Navbar = () => {
  return (
    <>
      <div class="">
        <ul class="navbar-nav">
          <div class="logo">
            <i class="fab fa-autoprefixer"></i>
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
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Check this switch"
            />
            <Form.Check
              disabled
              type="switch"
              label="disabled switch"
              id="disabled-custom-switch"
            />
          </Form>
        </ul>
      </div>
    </>
  );
};

export default Sidenav;
