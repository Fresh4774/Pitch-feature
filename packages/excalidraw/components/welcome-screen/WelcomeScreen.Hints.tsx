import { t } from "../../i18n";
import { useTunnels } from "../../context/tunnels";
import { WelcomeScreenHelpArrow, WelcomeScreenMenuArrow } from "../icons";

const MenuHint = ({ children }: { children?: React.ReactNode }) => {
  const { WelcomeScreenMenuHintTunnel } = useTunnels();
  return (
    <WelcomeScreenMenuHintTunnel.In>
      <div className="virgil welcome-screen-decor welcome-screen-decor-hint welcome-screen-decor-hint--menu">
        {WelcomeScreenMenuArrow}
        <div className="welcome-screen-decor-hint__label">
          {children || t("welcomeScreen.defaults.menuHint")}
        </div>
      </div>
    </WelcomeScreenMenuHintTunnel.In>
  );
};
MenuHint.displayName = "MenuHint";

const HelpHint = ({ children }: { children?: React.ReactNode }) => {
  const { WelcomeScreenHelpHintTunnel } = useTunnels();
  return (
    <WelcomeScreenHelpHintTunnel.In>
      <div className="virgil welcome-screen-decor welcome-screen-decor-hint welcome-screen-decor-hint--help">
        <div>{children || t("welcomeScreen.defaults.helpHint")}</div>
        {WelcomeScreenHelpArrow}
      </div>
    </WelcomeScreenHelpHintTunnel.In>
  );
};
HelpHint.displayName = "HelpHint";

export { HelpHint, MenuHint };
