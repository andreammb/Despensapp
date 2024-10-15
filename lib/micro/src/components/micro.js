import { Button } from "./button";
import { Group } from "./group";

micro.button = Button;
micro.group = Group;

export function micro(children) { return children };
