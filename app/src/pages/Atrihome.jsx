import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex11Cb, useFlex12Cb, useFlex13Cb, useFlex14Cb, useFlex15Cb, useFlex17Cb, useFlex16Cb, useFlex18Cb, useFlex19Cb, useFlex20Cb, useFlex22Cb, useDiv12Cb, useDiv14Cb, useDiv15Cb, useDiv16Cb, useFlex23Cb, useFlex24Cb, useFlex25Cb, useFlex28Cb, useFlex29Cb, useFlex30Cb, useFlex31Cb, useFlex33Cb, useFlex34Cb, useFlex26Cb, useFlex35Cb, useFlex36Cb, useFlex37Cb, useFlex39Cb, useFlex41Cb, useFlex150Cb, useFlex148Cb, useFlex149Cb, useFlex43Cb, useFlex141Cb, useFlex139Cb, useFlex140Cb, useFlex44Cb, useFlex144Cb, useFlex142Cb, useFlex143Cb, useFlex45Cb, useFlex147Cb, useFlex145Cb, useFlex146Cb, useFlex201Cb, useFlex197Cb, useFlex193Cb, useFlex185Cb, useFlex186Cb, useFlex198Cb, useFlex194Cb, useFlex187Cb, useFlex188Cb, useFlex199Cb, useFlex195Cb, useFlex189Cb, useFlex190Cb, useFlex200Cb, useFlex196Cb, useFlex191Cb, useFlex192Cb, useFlex204Cb, useFlex205Cb, useFlex206Cb, useFlex210Cb, useFlex212Cb, useFlex211Cb, useFlex207Cb, useFlex214Cb, useFlex215Cb, useFlex216Cb, useFlex218Cb, useFlex221Cb, useFlex222Cb, useFlex223Cb, useFlex224Cb, useFlex225Cb, useFlex226Cb, useFlex227Cb, useFlex228Cb, useFlex229Cb, useFlex231Cb, useFlex232Cb, useFlex235Cb, useFlex230Cb, useFlex233Cb, useFlex236Cb, useFlex234Cb, useFlex237Cb, useFlex238Cb, useFlex239Cb, useFlex259Cb, useFlex256Cb, useFlex257Cb, useFlex258Cb, useFlex255Cb, useFlex254Cb, useFlex240Cb, useFlex260Cb, useFlex275Cb, useFlex261Cb, useFlex264Cb, useFlex265Cb, useFlex270Cb, useFlex262Cb, useFlex266Cb, useFlex271Cb, useFlex267Cb, useFlex272Cb, useFlex263Cb, useFlex268Cb, useFlex273Cb, useFlex269Cb, useFlex274Cb, useFlex276Cb, useFlex277Cb, useFlex278Cb, useFlex279Cb, useFlex280Cb, useFlex282Cb, useFlex284Cb, useFlex286Cb, useFlex283Cb, useFlex285Cb, useFlex287Cb, useFlex281Cb, useFlex288Cb, useFlex289Cb, useFlex299Cb, useFlex300Cb, useFlex290Cb, useFlex298Cb, useFlex296Cb, useFlex292Cb, useFlex293Cb, useFlex297Cb, useFlex294Cb, useFlex295Cb, useFlex291Cb, useFlex301Cb, useFlex302Cb, useFlex303Cb, useImage6Cb, useTextBox5Cb, useTextBox6Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useButton7Cb, useButton8Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, useButton11Cb, useButton12Cb, useImage7Cb, useTextBox16Cb, useImage10Cb, useImage11Cb, useImage12Cb, useImage13Cb, useTextBox17Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useImage20Cb, useTextBox39Cb, useTextBox40Cb, useTextBox41Cb, useImage22Cb, useTextBox42Cb, useTextBox43Cb, useTextBox44Cb, useImage23Cb, useTextBox45Cb, useTextBox46Cb, useTextBox47Cb, useImage24Cb, useButton13Cb, useButton14Cb, useImage26Cb, useTextBox48Cb, useTextBox49Cb, useImage28Cb, useImage29Cb, useTextBox50Cb, useImage30Cb, useTextBox51Cb, useTextBox53Cb, useTextBox54Cb, useTextBox55Cb, useButton16Cb, useButton17Cb, useTextBox56Cb, useTextBox57Cb, useTextBox161Cb, useTextBox162Cb, useTextBox163Cb, useImage73Cb, useTextBox152Cb, useTextBox153Cb, useTextBox154Cb, useImage70Cb, useTextBox155Cb, useTextBox156Cb, useTextBox157Cb, useImage71Cb, useTextBox158Cb, useTextBox159Cb, useTextBox160Cb, useImage72Cb, useImage82Cb, useTextBox188Cb, useTextBox189Cb, useTextBox190Cb, useImage83Cb, useTextBox191Cb, useTextBox192Cb, useTextBox193Cb, useImage84Cb, useTextBox194Cb, useTextBox195Cb, useTextBox196Cb, useImage85Cb, useTextBox197Cb, useTextBox198Cb, useTextBox199Cb, useButton22Cb, useButton24Cb, useTextBox209Cb, useTextBox211Cb, useButton26Cb, useButton27Cb, useImage86Cb, useTextBox212Cb, useTextBox213Cb, useImage87Cb, useImage88Cb, useTextBox217Cb, useTextBox218Cb, useImage90Cb, useImage91Cb, useImage92Cb, useImage93Cb, useImage94Cb, useImage95Cb, useTextBox219Cb, useButton28Cb, useButton29Cb, useTextBox220Cb, useButton30Cb, useImage96Cb, useTextBox221Cb, useTextBox222Cb, useTextBox223Cb, useImage97Cb, useTextBox225Cb, useTextBox226Cb, useTextBox227Cb, useTextBox228Cb, useImage98Cb, useTextBox229Cb, useTextBox230Cb, useImage99Cb, useTextBox231Cb, useTextBox232Cb, useImage100Cb, useTextBox244Cb, useTextBox245Cb, useTextBox241Cb, useImage108Cb, useTextBox242Cb, useImage109Cb, useTextBox243Cb, useImage107Cb, useInput11Cb, useTextBox257Cb, useButton31Cb, useTextBox247Cb, useInput1Cb, useInput6Cb, useTextBox252Cb, useInput7Cb, useTextBox253Cb, useInput8Cb, useTextBox254Cb, useInput9Cb, useTextBox255Cb, useInput10Cb, useTextBox256Cb, useTextBox258Cb, useButton32Cb, useImage110Cb, useImage112Cb, useImage113Cb, useImage114Cb, useImage115Cb, useImage111Cb, useImage120Cb, useTextBox260Cb, useImage121Cb, useImage122Cb, useImage123Cb, useImage124Cb, useImage125Cb, useTextBox259Cb, useImage116Cb, useImage117Cb, useImage118Cb, useImage119Cb, useTextBox261Cb, useTextBox262Cb, useTextBox263Cb, useTextBox264Cb, useTextBox265Cb, useTextBox266Cb, useTextBox267Cb, useTextBox268Cb, useTextBox269Cb, useTextBox270Cb, useTextBox271Cb, useTextBox272Cb, useTextBox273Cb, useTextBox274Cb, useTextBox275Cb, useTextBox276Cb } from "../page-cbs/atrihome";
import "../page-css/atrihome.css";
import "../custom/atrihome";

export default function Atrihome() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex11Props = useStore((state)=>state["atrihome"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["atrihome"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex12Props = useStore((state)=>state["atrihome"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["atrihome"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex13Props = useStore((state)=>state["atrihome"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["atrihome"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex14Props = useStore((state)=>state["atrihome"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["atrihome"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["atrihome"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["atrihome"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex17Props = useStore((state)=>state["atrihome"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["atrihome"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex16Props = useStore((state)=>state["atrihome"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["atrihome"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex18Props = useStore((state)=>state["atrihome"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["atrihome"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex19Props = useStore((state)=>state["atrihome"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["atrihome"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["atrihome"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["atrihome"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex22Props = useStore((state)=>state["atrihome"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["atrihome"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Div12Props = useStore((state)=>state["atrihome"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["atrihome"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Div14Props = useStore((state)=>state["atrihome"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["atrihome"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Div15Props = useStore((state)=>state["atrihome"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["atrihome"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div16Props = useStore((state)=>state["atrihome"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["atrihome"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Flex23Props = useStore((state)=>state["atrihome"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["atrihome"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Flex24Props = useStore((state)=>state["atrihome"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["atrihome"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex25Props = useStore((state)=>state["atrihome"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["atrihome"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex28Props = useStore((state)=>state["atrihome"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["atrihome"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["atrihome"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["atrihome"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex30Props = useStore((state)=>state["atrihome"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["atrihome"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["atrihome"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["atrihome"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex33Props = useStore((state)=>state["atrihome"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["atrihome"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex34Props = useStore((state)=>state["atrihome"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["atrihome"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex26Props = useStore((state)=>state["atrihome"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["atrihome"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex35Props = useStore((state)=>state["atrihome"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["atrihome"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["atrihome"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["atrihome"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex37Props = useStore((state)=>state["atrihome"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["atrihome"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex39Props = useStore((state)=>state["atrihome"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["atrihome"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex41Props = useStore((state)=>state["atrihome"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["atrihome"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex150Props = useStore((state)=>state["atrihome"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["atrihome"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Flex148Props = useStore((state)=>state["atrihome"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["atrihome"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex149Props = useStore((state)=>state["atrihome"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["atrihome"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex43Props = useStore((state)=>state["atrihome"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["atrihome"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex141Props = useStore((state)=>state["atrihome"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["atrihome"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex139Props = useStore((state)=>state["atrihome"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["atrihome"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Flex140Props = useStore((state)=>state["atrihome"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["atrihome"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex44Props = useStore((state)=>state["atrihome"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["atrihome"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex144Props = useStore((state)=>state["atrihome"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["atrihome"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Flex142Props = useStore((state)=>state["atrihome"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["atrihome"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const Flex143Props = useStore((state)=>state["atrihome"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["atrihome"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Flex45Props = useStore((state)=>state["atrihome"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["atrihome"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex147Props = useStore((state)=>state["atrihome"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["atrihome"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Flex145Props = useStore((state)=>state["atrihome"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["atrihome"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Flex146Props = useStore((state)=>state["atrihome"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["atrihome"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Flex201Props = useStore((state)=>state["atrihome"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["atrihome"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const Flex197Props = useStore((state)=>state["atrihome"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["atrihome"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const Flex193Props = useStore((state)=>state["atrihome"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["atrihome"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex185Props = useStore((state)=>state["atrihome"]["Flex185"]);
const Flex185IoProps = useIoStore((state)=>state["atrihome"]["Flex185"]);
const Flex185Cb = useFlex185Cb()
const Flex186Props = useStore((state)=>state["atrihome"]["Flex186"]);
const Flex186IoProps = useIoStore((state)=>state["atrihome"]["Flex186"]);
const Flex186Cb = useFlex186Cb()
const Flex198Props = useStore((state)=>state["atrihome"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["atrihome"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const Flex194Props = useStore((state)=>state["atrihome"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["atrihome"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex187Props = useStore((state)=>state["atrihome"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["atrihome"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Flex188Props = useStore((state)=>state["atrihome"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["atrihome"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex199Props = useStore((state)=>state["atrihome"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["atrihome"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const Flex195Props = useStore((state)=>state["atrihome"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["atrihome"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Flex189Props = useStore((state)=>state["atrihome"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["atrihome"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Flex190Props = useStore((state)=>state["atrihome"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["atrihome"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex200Props = useStore((state)=>state["atrihome"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["atrihome"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex196Props = useStore((state)=>state["atrihome"]["Flex196"]);
const Flex196IoProps = useIoStore((state)=>state["atrihome"]["Flex196"]);
const Flex196Cb = useFlex196Cb()
const Flex191Props = useStore((state)=>state["atrihome"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["atrihome"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex192Props = useStore((state)=>state["atrihome"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["atrihome"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const Flex204Props = useStore((state)=>state["atrihome"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["atrihome"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex205Props = useStore((state)=>state["atrihome"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["atrihome"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const Flex206Props = useStore((state)=>state["atrihome"]["Flex206"]);
const Flex206IoProps = useIoStore((state)=>state["atrihome"]["Flex206"]);
const Flex206Cb = useFlex206Cb()
const Flex210Props = useStore((state)=>state["atrihome"]["Flex210"]);
const Flex210IoProps = useIoStore((state)=>state["atrihome"]["Flex210"]);
const Flex210Cb = useFlex210Cb()
const Flex212Props = useStore((state)=>state["atrihome"]["Flex212"]);
const Flex212IoProps = useIoStore((state)=>state["atrihome"]["Flex212"]);
const Flex212Cb = useFlex212Cb()
const Flex211Props = useStore((state)=>state["atrihome"]["Flex211"]);
const Flex211IoProps = useIoStore((state)=>state["atrihome"]["Flex211"]);
const Flex211Cb = useFlex211Cb()
const Flex207Props = useStore((state)=>state["atrihome"]["Flex207"]);
const Flex207IoProps = useIoStore((state)=>state["atrihome"]["Flex207"]);
const Flex207Cb = useFlex207Cb()
const Flex214Props = useStore((state)=>state["atrihome"]["Flex214"]);
const Flex214IoProps = useIoStore((state)=>state["atrihome"]["Flex214"]);
const Flex214Cb = useFlex214Cb()
const Flex215Props = useStore((state)=>state["atrihome"]["Flex215"]);
const Flex215IoProps = useIoStore((state)=>state["atrihome"]["Flex215"]);
const Flex215Cb = useFlex215Cb()
const Flex216Props = useStore((state)=>state["atrihome"]["Flex216"]);
const Flex216IoProps = useIoStore((state)=>state["atrihome"]["Flex216"]);
const Flex216Cb = useFlex216Cb()
const Flex218Props = useStore((state)=>state["atrihome"]["Flex218"]);
const Flex218IoProps = useIoStore((state)=>state["atrihome"]["Flex218"]);
const Flex218Cb = useFlex218Cb()
const Flex221Props = useStore((state)=>state["atrihome"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["atrihome"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const Flex222Props = useStore((state)=>state["atrihome"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["atrihome"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const Flex223Props = useStore((state)=>state["atrihome"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["atrihome"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Flex224Props = useStore((state)=>state["atrihome"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["atrihome"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex225Props = useStore((state)=>state["atrihome"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["atrihome"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const Flex226Props = useStore((state)=>state["atrihome"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["atrihome"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Flex227Props = useStore((state)=>state["atrihome"]["Flex227"]);
const Flex227IoProps = useIoStore((state)=>state["atrihome"]["Flex227"]);
const Flex227Cb = useFlex227Cb()
const Flex228Props = useStore((state)=>state["atrihome"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["atrihome"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const Flex229Props = useStore((state)=>state["atrihome"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["atrihome"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Flex231Props = useStore((state)=>state["atrihome"]["Flex231"]);
const Flex231IoProps = useIoStore((state)=>state["atrihome"]["Flex231"]);
const Flex231Cb = useFlex231Cb()
const Flex232Props = useStore((state)=>state["atrihome"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["atrihome"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const Flex235Props = useStore((state)=>state["atrihome"]["Flex235"]);
const Flex235IoProps = useIoStore((state)=>state["atrihome"]["Flex235"]);
const Flex235Cb = useFlex235Cb()
const Flex230Props = useStore((state)=>state["atrihome"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["atrihome"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
const Flex233Props = useStore((state)=>state["atrihome"]["Flex233"]);
const Flex233IoProps = useIoStore((state)=>state["atrihome"]["Flex233"]);
const Flex233Cb = useFlex233Cb()
const Flex236Props = useStore((state)=>state["atrihome"]["Flex236"]);
const Flex236IoProps = useIoStore((state)=>state["atrihome"]["Flex236"]);
const Flex236Cb = useFlex236Cb()
const Flex234Props = useStore((state)=>state["atrihome"]["Flex234"]);
const Flex234IoProps = useIoStore((state)=>state["atrihome"]["Flex234"]);
const Flex234Cb = useFlex234Cb()
const Flex237Props = useStore((state)=>state["atrihome"]["Flex237"]);
const Flex237IoProps = useIoStore((state)=>state["atrihome"]["Flex237"]);
const Flex237Cb = useFlex237Cb()
const Flex238Props = useStore((state)=>state["atrihome"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["atrihome"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const Flex239Props = useStore((state)=>state["atrihome"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["atrihome"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Flex259Props = useStore((state)=>state["atrihome"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["atrihome"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Flex256Props = useStore((state)=>state["atrihome"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["atrihome"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex257Props = useStore((state)=>state["atrihome"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["atrihome"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex258Props = useStore((state)=>state["atrihome"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["atrihome"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex255Props = useStore((state)=>state["atrihome"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["atrihome"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex254Props = useStore((state)=>state["atrihome"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["atrihome"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex240Props = useStore((state)=>state["atrihome"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["atrihome"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Flex260Props = useStore((state)=>state["atrihome"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["atrihome"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const Flex275Props = useStore((state)=>state["atrihome"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["atrihome"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex261Props = useStore((state)=>state["atrihome"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["atrihome"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex264Props = useStore((state)=>state["atrihome"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["atrihome"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Flex265Props = useStore((state)=>state["atrihome"]["Flex265"]);
const Flex265IoProps = useIoStore((state)=>state["atrihome"]["Flex265"]);
const Flex265Cb = useFlex265Cb()
const Flex270Props = useStore((state)=>state["atrihome"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["atrihome"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const Flex262Props = useStore((state)=>state["atrihome"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["atrihome"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex266Props = useStore((state)=>state["atrihome"]["Flex266"]);
const Flex266IoProps = useIoStore((state)=>state["atrihome"]["Flex266"]);
const Flex266Cb = useFlex266Cb()
const Flex271Props = useStore((state)=>state["atrihome"]["Flex271"]);
const Flex271IoProps = useIoStore((state)=>state["atrihome"]["Flex271"]);
const Flex271Cb = useFlex271Cb()
const Flex267Props = useStore((state)=>state["atrihome"]["Flex267"]);
const Flex267IoProps = useIoStore((state)=>state["atrihome"]["Flex267"]);
const Flex267Cb = useFlex267Cb()
const Flex272Props = useStore((state)=>state["atrihome"]["Flex272"]);
const Flex272IoProps = useIoStore((state)=>state["atrihome"]["Flex272"]);
const Flex272Cb = useFlex272Cb()
const Flex263Props = useStore((state)=>state["atrihome"]["Flex263"]);
const Flex263IoProps = useIoStore((state)=>state["atrihome"]["Flex263"]);
const Flex263Cb = useFlex263Cb()
const Flex268Props = useStore((state)=>state["atrihome"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["atrihome"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex273Props = useStore((state)=>state["atrihome"]["Flex273"]);
const Flex273IoProps = useIoStore((state)=>state["atrihome"]["Flex273"]);
const Flex273Cb = useFlex273Cb()
const Flex269Props = useStore((state)=>state["atrihome"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["atrihome"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Flex274Props = useStore((state)=>state["atrihome"]["Flex274"]);
const Flex274IoProps = useIoStore((state)=>state["atrihome"]["Flex274"]);
const Flex274Cb = useFlex274Cb()
const Flex276Props = useStore((state)=>state["atrihome"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["atrihome"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex277Props = useStore((state)=>state["atrihome"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["atrihome"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex278Props = useStore((state)=>state["atrihome"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["atrihome"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex279Props = useStore((state)=>state["atrihome"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["atrihome"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Flex280Props = useStore((state)=>state["atrihome"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["atrihome"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex282Props = useStore((state)=>state["atrihome"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["atrihome"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex284Props = useStore((state)=>state["atrihome"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["atrihome"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex286Props = useStore((state)=>state["atrihome"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["atrihome"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Flex283Props = useStore((state)=>state["atrihome"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["atrihome"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex285Props = useStore((state)=>state["atrihome"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["atrihome"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex287Props = useStore((state)=>state["atrihome"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["atrihome"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex281Props = useStore((state)=>state["atrihome"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["atrihome"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex288Props = useStore((state)=>state["atrihome"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["atrihome"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex289Props = useStore((state)=>state["atrihome"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["atrihome"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Flex299Props = useStore((state)=>state["atrihome"]["Flex299"]);
const Flex299IoProps = useIoStore((state)=>state["atrihome"]["Flex299"]);
const Flex299Cb = useFlex299Cb()
const Flex300Props = useStore((state)=>state["atrihome"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["atrihome"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const Flex290Props = useStore((state)=>state["atrihome"]["Flex290"]);
const Flex290IoProps = useIoStore((state)=>state["atrihome"]["Flex290"]);
const Flex290Cb = useFlex290Cb()
const Flex298Props = useStore((state)=>state["atrihome"]["Flex298"]);
const Flex298IoProps = useIoStore((state)=>state["atrihome"]["Flex298"]);
const Flex298Cb = useFlex298Cb()
const Flex296Props = useStore((state)=>state["atrihome"]["Flex296"]);
const Flex296IoProps = useIoStore((state)=>state["atrihome"]["Flex296"]);
const Flex296Cb = useFlex296Cb()
const Flex292Props = useStore((state)=>state["atrihome"]["Flex292"]);
const Flex292IoProps = useIoStore((state)=>state["atrihome"]["Flex292"]);
const Flex292Cb = useFlex292Cb()
const Flex293Props = useStore((state)=>state["atrihome"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["atrihome"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const Flex297Props = useStore((state)=>state["atrihome"]["Flex297"]);
const Flex297IoProps = useIoStore((state)=>state["atrihome"]["Flex297"]);
const Flex297Cb = useFlex297Cb()
const Flex294Props = useStore((state)=>state["atrihome"]["Flex294"]);
const Flex294IoProps = useIoStore((state)=>state["atrihome"]["Flex294"]);
const Flex294Cb = useFlex294Cb()
const Flex295Props = useStore((state)=>state["atrihome"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["atrihome"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Flex291Props = useStore((state)=>state["atrihome"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["atrihome"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Flex301Props = useStore((state)=>state["atrihome"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["atrihome"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Flex302Props = useStore((state)=>state["atrihome"]["Flex302"]);
const Flex302IoProps = useIoStore((state)=>state["atrihome"]["Flex302"]);
const Flex302Cb = useFlex302Cb()
const Flex303Props = useStore((state)=>state["atrihome"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["atrihome"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Image6Props = useStore((state)=>state["atrihome"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["atrihome"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox5Props = useStore((state)=>state["atrihome"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["atrihome"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox6Props = useStore((state)=>state["atrihome"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["atrihome"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["atrihome"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["atrihome"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["atrihome"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["atrihome"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["atrihome"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["atrihome"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Button7Props = useStore((state)=>state["atrihome"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["atrihome"]["Button7"]);
const Button7Cb = useButton7Cb()
const Button8Props = useStore((state)=>state["atrihome"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["atrihome"]["Button8"]);
const Button8Cb = useButton8Cb()
const TextBox12Props = useStore((state)=>state["atrihome"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["atrihome"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["atrihome"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["atrihome"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["atrihome"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["atrihome"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Button11Props = useStore((state)=>state["atrihome"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["atrihome"]["Button11"]);
const Button11Cb = useButton11Cb()
const Button12Props = useStore((state)=>state["atrihome"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["atrihome"]["Button12"]);
const Button12Cb = useButton12Cb()
const Image7Props = useStore((state)=>state["atrihome"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["atrihome"]["Image7"]);
const Image7Cb = useImage7Cb()
const TextBox16Props = useStore((state)=>state["atrihome"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["atrihome"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const Image10Props = useStore((state)=>state["atrihome"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["atrihome"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image11Props = useStore((state)=>state["atrihome"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["atrihome"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image12Props = useStore((state)=>state["atrihome"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["atrihome"]["Image12"]);
const Image12Cb = useImage12Cb()
const Image13Props = useStore((state)=>state["atrihome"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["atrihome"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox17Props = useStore((state)=>state["atrihome"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["atrihome"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox33Props = useStore((state)=>state["atrihome"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["atrihome"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["atrihome"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["atrihome"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["atrihome"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["atrihome"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image20Props = useStore((state)=>state["atrihome"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["atrihome"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox39Props = useStore((state)=>state["atrihome"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["atrihome"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["atrihome"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["atrihome"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["atrihome"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["atrihome"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Image22Props = useStore((state)=>state["atrihome"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["atrihome"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox42Props = useStore((state)=>state["atrihome"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["atrihome"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["atrihome"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["atrihome"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["atrihome"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["atrihome"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Image23Props = useStore((state)=>state["atrihome"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["atrihome"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox45Props = useStore((state)=>state["atrihome"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["atrihome"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["atrihome"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["atrihome"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["atrihome"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["atrihome"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const Image24Props = useStore((state)=>state["atrihome"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["atrihome"]["Image24"]);
const Image24Cb = useImage24Cb()
const Button13Props = useStore((state)=>state["atrihome"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["atrihome"]["Button13"]);
const Button13Cb = useButton13Cb()
const Button14Props = useStore((state)=>state["atrihome"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["atrihome"]["Button14"]);
const Button14Cb = useButton14Cb()
const Image26Props = useStore((state)=>state["atrihome"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["atrihome"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox48Props = useStore((state)=>state["atrihome"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["atrihome"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["atrihome"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["atrihome"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image28Props = useStore((state)=>state["atrihome"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["atrihome"]["Image28"]);
const Image28Cb = useImage28Cb()
const Image29Props = useStore((state)=>state["atrihome"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["atrihome"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox50Props = useStore((state)=>state["atrihome"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["atrihome"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Image30Props = useStore((state)=>state["atrihome"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["atrihome"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox51Props = useStore((state)=>state["atrihome"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["atrihome"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox53Props = useStore((state)=>state["atrihome"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["atrihome"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["atrihome"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["atrihome"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["atrihome"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["atrihome"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Button16Props = useStore((state)=>state["atrihome"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["atrihome"]["Button16"]);
const Button16Cb = useButton16Cb()
const Button17Props = useStore((state)=>state["atrihome"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["atrihome"]["Button17"]);
const Button17Cb = useButton17Cb()
const TextBox56Props = useStore((state)=>state["atrihome"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["atrihome"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["atrihome"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["atrihome"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox161Props = useStore((state)=>state["atrihome"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["atrihome"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["atrihome"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["atrihome"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["atrihome"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["atrihome"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Image73Props = useStore((state)=>state["atrihome"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["atrihome"]["Image73"]);
const Image73Cb = useImage73Cb()
const TextBox152Props = useStore((state)=>state["atrihome"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["atrihome"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox153Props = useStore((state)=>state["atrihome"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["atrihome"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox154Props = useStore((state)=>state["atrihome"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["atrihome"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const Image70Props = useStore((state)=>state["atrihome"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["atrihome"]["Image70"]);
const Image70Cb = useImage70Cb()
const TextBox155Props = useStore((state)=>state["atrihome"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["atrihome"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["atrihome"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["atrihome"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["atrihome"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["atrihome"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const Image71Props = useStore((state)=>state["atrihome"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["atrihome"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox158Props = useStore((state)=>state["atrihome"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["atrihome"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox159Props = useStore((state)=>state["atrihome"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["atrihome"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["atrihome"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["atrihome"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const Image72Props = useStore((state)=>state["atrihome"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["atrihome"]["Image72"]);
const Image72Cb = useImage72Cb()
const Image82Props = useStore((state)=>state["atrihome"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["atrihome"]["Image82"]);
const Image82Cb = useImage82Cb()
const TextBox188Props = useStore((state)=>state["atrihome"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["atrihome"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["atrihome"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["atrihome"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox190Props = useStore((state)=>state["atrihome"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["atrihome"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const Image83Props = useStore((state)=>state["atrihome"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["atrihome"]["Image83"]);
const Image83Cb = useImage83Cb()
const TextBox191Props = useStore((state)=>state["atrihome"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["atrihome"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["atrihome"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["atrihome"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["atrihome"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["atrihome"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const Image84Props = useStore((state)=>state["atrihome"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["atrihome"]["Image84"]);
const Image84Cb = useImage84Cb()
const TextBox194Props = useStore((state)=>state["atrihome"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["atrihome"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const TextBox195Props = useStore((state)=>state["atrihome"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["atrihome"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const TextBox196Props = useStore((state)=>state["atrihome"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["atrihome"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const Image85Props = useStore((state)=>state["atrihome"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["atrihome"]["Image85"]);
const Image85Cb = useImage85Cb()
const TextBox197Props = useStore((state)=>state["atrihome"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["atrihome"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["atrihome"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["atrihome"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const TextBox199Props = useStore((state)=>state["atrihome"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["atrihome"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const Button22Props = useStore((state)=>state["atrihome"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["atrihome"]["Button22"]);
const Button22Cb = useButton22Cb()
const Button24Props = useStore((state)=>state["atrihome"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["atrihome"]["Button24"]);
const Button24Cb = useButton24Cb()
const TextBox209Props = useStore((state)=>state["atrihome"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["atrihome"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox211Props = useStore((state)=>state["atrihome"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["atrihome"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const Button26Props = useStore((state)=>state["atrihome"]["Button26"]);
const Button26IoProps = useIoStore((state)=>state["atrihome"]["Button26"]);
const Button26Cb = useButton26Cb()
const Button27Props = useStore((state)=>state["atrihome"]["Button27"]);
const Button27IoProps = useIoStore((state)=>state["atrihome"]["Button27"]);
const Button27Cb = useButton27Cb()
const Image86Props = useStore((state)=>state["atrihome"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["atrihome"]["Image86"]);
const Image86Cb = useImage86Cb()
const TextBox212Props = useStore((state)=>state["atrihome"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["atrihome"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const TextBox213Props = useStore((state)=>state["atrihome"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["atrihome"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const Image87Props = useStore((state)=>state["atrihome"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["atrihome"]["Image87"]);
const Image87Cb = useImage87Cb()
const Image88Props = useStore((state)=>state["atrihome"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["atrihome"]["Image88"]);
const Image88Cb = useImage88Cb()
const TextBox217Props = useStore((state)=>state["atrihome"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["atrihome"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox218Props = useStore((state)=>state["atrihome"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["atrihome"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const Image90Props = useStore((state)=>state["atrihome"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["atrihome"]["Image90"]);
const Image90Cb = useImage90Cb()
const Image91Props = useStore((state)=>state["atrihome"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["atrihome"]["Image91"]);
const Image91Cb = useImage91Cb()
const Image92Props = useStore((state)=>state["atrihome"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["atrihome"]["Image92"]);
const Image92Cb = useImage92Cb()
const Image93Props = useStore((state)=>state["atrihome"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["atrihome"]["Image93"]);
const Image93Cb = useImage93Cb()
const Image94Props = useStore((state)=>state["atrihome"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["atrihome"]["Image94"]);
const Image94Cb = useImage94Cb()
const Image95Props = useStore((state)=>state["atrihome"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["atrihome"]["Image95"]);
const Image95Cb = useImage95Cb()
const TextBox219Props = useStore((state)=>state["atrihome"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["atrihome"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const Button28Props = useStore((state)=>state["atrihome"]["Button28"]);
const Button28IoProps = useIoStore((state)=>state["atrihome"]["Button28"]);
const Button28Cb = useButton28Cb()
const Button29Props = useStore((state)=>state["atrihome"]["Button29"]);
const Button29IoProps = useIoStore((state)=>state["atrihome"]["Button29"]);
const Button29Cb = useButton29Cb()
const TextBox220Props = useStore((state)=>state["atrihome"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["atrihome"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const Button30Props = useStore((state)=>state["atrihome"]["Button30"]);
const Button30IoProps = useIoStore((state)=>state["atrihome"]["Button30"]);
const Button30Cb = useButton30Cb()
const Image96Props = useStore((state)=>state["atrihome"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["atrihome"]["Image96"]);
const Image96Cb = useImage96Cb()
const TextBox221Props = useStore((state)=>state["atrihome"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["atrihome"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["atrihome"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["atrihome"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox223Props = useStore((state)=>state["atrihome"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["atrihome"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const Image97Props = useStore((state)=>state["atrihome"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["atrihome"]["Image97"]);
const Image97Cb = useImage97Cb()
const TextBox225Props = useStore((state)=>state["atrihome"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["atrihome"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox226Props = useStore((state)=>state["atrihome"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["atrihome"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox227Props = useStore((state)=>state["atrihome"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["atrihome"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox228Props = useStore((state)=>state["atrihome"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["atrihome"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const Image98Props = useStore((state)=>state["atrihome"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["atrihome"]["Image98"]);
const Image98Cb = useImage98Cb()
const TextBox229Props = useStore((state)=>state["atrihome"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["atrihome"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox230Props = useStore((state)=>state["atrihome"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["atrihome"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const Image99Props = useStore((state)=>state["atrihome"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["atrihome"]["Image99"]);
const Image99Cb = useImage99Cb()
const TextBox231Props = useStore((state)=>state["atrihome"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["atrihome"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const TextBox232Props = useStore((state)=>state["atrihome"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["atrihome"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const Image100Props = useStore((state)=>state["atrihome"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["atrihome"]["Image100"]);
const Image100Cb = useImage100Cb()
const TextBox244Props = useStore((state)=>state["atrihome"]["TextBox244"]);
const TextBox244IoProps = useIoStore((state)=>state["atrihome"]["TextBox244"]);
const TextBox244Cb = useTextBox244Cb()
const TextBox245Props = useStore((state)=>state["atrihome"]["TextBox245"]);
const TextBox245IoProps = useIoStore((state)=>state["atrihome"]["TextBox245"]);
const TextBox245Cb = useTextBox245Cb()
const TextBox241Props = useStore((state)=>state["atrihome"]["TextBox241"]);
const TextBox241IoProps = useIoStore((state)=>state["atrihome"]["TextBox241"]);
const TextBox241Cb = useTextBox241Cb()
const Image108Props = useStore((state)=>state["atrihome"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["atrihome"]["Image108"]);
const Image108Cb = useImage108Cb()
const TextBox242Props = useStore((state)=>state["atrihome"]["TextBox242"]);
const TextBox242IoProps = useIoStore((state)=>state["atrihome"]["TextBox242"]);
const TextBox242Cb = useTextBox242Cb()
const Image109Props = useStore((state)=>state["atrihome"]["Image109"]);
const Image109IoProps = useIoStore((state)=>state["atrihome"]["Image109"]);
const Image109Cb = useImage109Cb()
const TextBox243Props = useStore((state)=>state["atrihome"]["TextBox243"]);
const TextBox243IoProps = useIoStore((state)=>state["atrihome"]["TextBox243"]);
const TextBox243Cb = useTextBox243Cb()
const Image107Props = useStore((state)=>state["atrihome"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["atrihome"]["Image107"]);
const Image107Cb = useImage107Cb()
const Input11Props = useStore((state)=>state["atrihome"]["Input11"]);
const Input11IoProps = useIoStore((state)=>state["atrihome"]["Input11"]);
const Input11Cb = useInput11Cb()
const TextBox257Props = useStore((state)=>state["atrihome"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["atrihome"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const Button31Props = useStore((state)=>state["atrihome"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["atrihome"]["Button31"]);
const Button31Cb = useButton31Cb()
const TextBox247Props = useStore((state)=>state["atrihome"]["TextBox247"]);
const TextBox247IoProps = useIoStore((state)=>state["atrihome"]["TextBox247"]);
const TextBox247Cb = useTextBox247Cb()
const Input1Props = useStore((state)=>state["atrihome"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["atrihome"]["Input1"]);
const Input1Cb = useInput1Cb()
const Input6Props = useStore((state)=>state["atrihome"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["atrihome"]["Input6"]);
const Input6Cb = useInput6Cb()
const TextBox252Props = useStore((state)=>state["atrihome"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["atrihome"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const Input7Props = useStore((state)=>state["atrihome"]["Input7"]);
const Input7IoProps = useIoStore((state)=>state["atrihome"]["Input7"]);
const Input7Cb = useInput7Cb()
const TextBox253Props = useStore((state)=>state["atrihome"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["atrihome"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const Input8Props = useStore((state)=>state["atrihome"]["Input8"]);
const Input8IoProps = useIoStore((state)=>state["atrihome"]["Input8"]);
const Input8Cb = useInput8Cb()
const TextBox254Props = useStore((state)=>state["atrihome"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["atrihome"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const Input9Props = useStore((state)=>state["atrihome"]["Input9"]);
const Input9IoProps = useIoStore((state)=>state["atrihome"]["Input9"]);
const Input9Cb = useInput9Cb()
const TextBox255Props = useStore((state)=>state["atrihome"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["atrihome"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const Input10Props = useStore((state)=>state["atrihome"]["Input10"]);
const Input10IoProps = useIoStore((state)=>state["atrihome"]["Input10"]);
const Input10Cb = useInput10Cb()
const TextBox256Props = useStore((state)=>state["atrihome"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["atrihome"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const TextBox258Props = useStore((state)=>state["atrihome"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["atrihome"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const Button32Props = useStore((state)=>state["atrihome"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["atrihome"]["Button32"]);
const Button32Cb = useButton32Cb()
const Image110Props = useStore((state)=>state["atrihome"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["atrihome"]["Image110"]);
const Image110Cb = useImage110Cb()
const Image112Props = useStore((state)=>state["atrihome"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["atrihome"]["Image112"]);
const Image112Cb = useImage112Cb()
const Image113Props = useStore((state)=>state["atrihome"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["atrihome"]["Image113"]);
const Image113Cb = useImage113Cb()
const Image114Props = useStore((state)=>state["atrihome"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["atrihome"]["Image114"]);
const Image114Cb = useImage114Cb()
const Image115Props = useStore((state)=>state["atrihome"]["Image115"]);
const Image115IoProps = useIoStore((state)=>state["atrihome"]["Image115"]);
const Image115Cb = useImage115Cb()
const Image111Props = useStore((state)=>state["atrihome"]["Image111"]);
const Image111IoProps = useIoStore((state)=>state["atrihome"]["Image111"]);
const Image111Cb = useImage111Cb()
const Image120Props = useStore((state)=>state["atrihome"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["atrihome"]["Image120"]);
const Image120Cb = useImage120Cb()
const TextBox260Props = useStore((state)=>state["atrihome"]["TextBox260"]);
const TextBox260IoProps = useIoStore((state)=>state["atrihome"]["TextBox260"]);
const TextBox260Cb = useTextBox260Cb()
const Image121Props = useStore((state)=>state["atrihome"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["atrihome"]["Image121"]);
const Image121Cb = useImage121Cb()
const Image122Props = useStore((state)=>state["atrihome"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["atrihome"]["Image122"]);
const Image122Cb = useImage122Cb()
const Image123Props = useStore((state)=>state["atrihome"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["atrihome"]["Image123"]);
const Image123Cb = useImage123Cb()
const Image124Props = useStore((state)=>state["atrihome"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["atrihome"]["Image124"]);
const Image124Cb = useImage124Cb()
const Image125Props = useStore((state)=>state["atrihome"]["Image125"]);
const Image125IoProps = useIoStore((state)=>state["atrihome"]["Image125"]);
const Image125Cb = useImage125Cb()
const TextBox259Props = useStore((state)=>state["atrihome"]["TextBox259"]);
const TextBox259IoProps = useIoStore((state)=>state["atrihome"]["TextBox259"]);
const TextBox259Cb = useTextBox259Cb()
const Image116Props = useStore((state)=>state["atrihome"]["Image116"]);
const Image116IoProps = useIoStore((state)=>state["atrihome"]["Image116"]);
const Image116Cb = useImage116Cb()
const Image117Props = useStore((state)=>state["atrihome"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["atrihome"]["Image117"]);
const Image117Cb = useImage117Cb()
const Image118Props = useStore((state)=>state["atrihome"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["atrihome"]["Image118"]);
const Image118Cb = useImage118Cb()
const Image119Props = useStore((state)=>state["atrihome"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["atrihome"]["Image119"]);
const Image119Cb = useImage119Cb()
const TextBox261Props = useStore((state)=>state["atrihome"]["TextBox261"]);
const TextBox261IoProps = useIoStore((state)=>state["atrihome"]["TextBox261"]);
const TextBox261Cb = useTextBox261Cb()
const TextBox262Props = useStore((state)=>state["atrihome"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["atrihome"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const TextBox263Props = useStore((state)=>state["atrihome"]["TextBox263"]);
const TextBox263IoProps = useIoStore((state)=>state["atrihome"]["TextBox263"]);
const TextBox263Cb = useTextBox263Cb()
const TextBox264Props = useStore((state)=>state["atrihome"]["TextBox264"]);
const TextBox264IoProps = useIoStore((state)=>state["atrihome"]["TextBox264"]);
const TextBox264Cb = useTextBox264Cb()
const TextBox265Props = useStore((state)=>state["atrihome"]["TextBox265"]);
const TextBox265IoProps = useIoStore((state)=>state["atrihome"]["TextBox265"]);
const TextBox265Cb = useTextBox265Cb()
const TextBox266Props = useStore((state)=>state["atrihome"]["TextBox266"]);
const TextBox266IoProps = useIoStore((state)=>state["atrihome"]["TextBox266"]);
const TextBox266Cb = useTextBox266Cb()
const TextBox267Props = useStore((state)=>state["atrihome"]["TextBox267"]);
const TextBox267IoProps = useIoStore((state)=>state["atrihome"]["TextBox267"]);
const TextBox267Cb = useTextBox267Cb()
const TextBox268Props = useStore((state)=>state["atrihome"]["TextBox268"]);
const TextBox268IoProps = useIoStore((state)=>state["atrihome"]["TextBox268"]);
const TextBox268Cb = useTextBox268Cb()
const TextBox269Props = useStore((state)=>state["atrihome"]["TextBox269"]);
const TextBox269IoProps = useIoStore((state)=>state["atrihome"]["TextBox269"]);
const TextBox269Cb = useTextBox269Cb()
const TextBox270Props = useStore((state)=>state["atrihome"]["TextBox270"]);
const TextBox270IoProps = useIoStore((state)=>state["atrihome"]["TextBox270"]);
const TextBox270Cb = useTextBox270Cb()
const TextBox271Props = useStore((state)=>state["atrihome"]["TextBox271"]);
const TextBox271IoProps = useIoStore((state)=>state["atrihome"]["TextBox271"]);
const TextBox271Cb = useTextBox271Cb()
const TextBox272Props = useStore((state)=>state["atrihome"]["TextBox272"]);
const TextBox272IoProps = useIoStore((state)=>state["atrihome"]["TextBox272"]);
const TextBox272Cb = useTextBox272Cb()
const TextBox273Props = useStore((state)=>state["atrihome"]["TextBox273"]);
const TextBox273IoProps = useIoStore((state)=>state["atrihome"]["TextBox273"]);
const TextBox273Cb = useTextBox273Cb()
const TextBox274Props = useStore((state)=>state["atrihome"]["TextBox274"]);
const TextBox274IoProps = useIoStore((state)=>state["atrihome"]["TextBox274"]);
const TextBox274Cb = useTextBox274Cb()
const TextBox275Props = useStore((state)=>state["atrihome"]["TextBox275"]);
const TextBox275IoProps = useIoStore((state)=>state["atrihome"]["TextBox275"]);
const TextBox275Cb = useTextBox275Cb()
const TextBox276Props = useStore((state)=>state["atrihome"]["TextBox276"]);
const TextBox276IoProps = useIoStore((state)=>state["atrihome"]["TextBox276"]);
const TextBox276Cb = useTextBox276Cb()

  return (<>
  <Flex className="p-atrihome Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Flex className="p-atrihome Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Image className="p-atrihome Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<TextBox className="p-atrihome TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<TextBox className="p-atrihome TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox className="p-atrihome TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox className="p-atrihome TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox className="p-atrihome TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Flex>
<Flex className="p-atrihome Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Button className="p-atrihome Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
<Button className="p-atrihome Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Flex className="p-atrihome Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<TextBox className="p-atrihome TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox className="p-atrihome TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-atrihome TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<Flex className="p-atrihome Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Button className="p-atrihome Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<Button className="p-atrihome Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image className="p-atrihome Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<TextBox className="p-atrihome TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<Flex className="p-atrihome Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Image className="p-atrihome Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<Image className="p-atrihome Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<Image className="p-atrihome Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<Image className="p-atrihome Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<TextBox className="p-atrihome TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<Flex className="p-atrihome Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Div className="p-atrihome Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<Image className="p-atrihome Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox className="p-atrihome TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-atrihome TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox className="p-atrihome TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Div>
<Div className="p-atrihome Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<Image className="p-atrihome Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox className="p-atrihome TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox className="p-atrihome TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-atrihome TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Div>
<Div className="p-atrihome Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Image className="p-atrihome Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox className="p-atrihome TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox className="p-atrihome TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox className="p-atrihome TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Div>
<Div className="p-atrihome Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Image className="p-atrihome Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox className="p-atrihome TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox className="p-atrihome TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox className="p-atrihome TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Div>
</Flex>
<Flex className="p-atrihome Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Button className="p-atrihome Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
<Button className="p-atrihome Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Flex className="p-atrihome Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Image className="p-atrihome Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Flex className="p-atrihome Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox className="p-atrihome TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<Flex className="p-atrihome Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Flex className="p-atrihome Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Flex className="p-atrihome Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Image className="p-atrihome Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
</Flex>
<TextBox className="p-atrihome TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex>
<Flex className="p-atrihome Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Image className="p-atrihome Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<TextBox className="p-atrihome TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex>
<Flex className="p-atrihome Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Image className="p-atrihome Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<TextBox className="p-atrihome TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<TextBox className="p-atrihome TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-atrihome TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-atrihome TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<Flex className="p-atrihome Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Button className="p-atrihome Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
<Button className="p-atrihome Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Flex className="p-atrihome Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<TextBox className="p-atrihome TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-atrihome TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Flex>
<Flex className="p-atrihome Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Flex className="p-atrihome Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Flex className="p-atrihome Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Flex className="p-atrihome Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Image className="p-atrihome Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
<TextBox className="p-atrihome TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<TextBox className="p-atrihome TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
</Flex>
<Flex className="p-atrihome Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<TextBox className="p-atrihome TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Flex className="p-atrihome Flex144 bpt" {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<Flex className="p-atrihome Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<Image className="p-atrihome Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
<TextBox className="p-atrihome TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<TextBox className="p-atrihome TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
</Flex>
<Flex className="p-atrihome Flex142 bpt" {...Flex142Props} {...Flex142Cb} {...Flex142IoProps}>
<TextBox className="p-atrihome TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex className="p-atrihome Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<Flex className="p-atrihome Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Image className="p-atrihome Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<TextBox className="p-atrihome TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
<TextBox className="p-atrihome TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
</Flex>
<Flex className="p-atrihome Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<TextBox className="p-atrihome TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Flex className="p-atrihome Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Flex className="p-atrihome Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Image className="p-atrihome Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
<TextBox className="p-atrihome TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox className="p-atrihome TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex>
<Flex className="p-atrihome Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<TextBox className="p-atrihome TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<Flex className="p-atrihome Flex199 bpt" {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<Flex className="p-atrihome Flex195 bpt" {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<Flex className="p-atrihome Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<Image className="p-atrihome Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
<TextBox className="p-atrihome TextBox195 bpt" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
<TextBox className="p-atrihome TextBox194 bpt" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
</Flex>
<Flex className="p-atrihome Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<TextBox className="p-atrihome TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex198 bpt" {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<Flex className="p-atrihome Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Flex className="p-atrihome Flex187 bpt" {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<Image className="p-atrihome Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
<TextBox className="p-atrihome TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox className="p-atrihome TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
</Flex>
<Flex className="p-atrihome Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<TextBox className="p-atrihome TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex197 bpt" {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<Flex className="p-atrihome Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Flex className="p-atrihome Flex185 bpt" {...Flex185Props} {...Flex185Cb} {...Flex185IoProps}>
<Image className="p-atrihome Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
<TextBox className="p-atrihome TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<TextBox className="p-atrihome TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
</Flex>
<Flex className="p-atrihome Flex186 bpt" {...Flex186Props} {...Flex186Cb} {...Flex186IoProps}>
<TextBox className="p-atrihome TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex200 bpt" {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<Flex className="p-atrihome Flex196 bpt" {...Flex196Props} {...Flex196Cb} {...Flex196IoProps}>
<Flex className="p-atrihome Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<Image className="p-atrihome Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
<TextBox className="p-atrihome TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
<TextBox className="p-atrihome TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
</Flex>
<Flex className="p-atrihome Flex192 bpt" {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<TextBox className="p-atrihome TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<Button className="p-atrihome Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
<Button className="p-atrihome Button24 bpt" {...Button24Props} {...Button24Cb} {...Button24IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex205 bpt" {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<Flex className="p-atrihome Flex206 bpt" {...Flex206Props} {...Flex206Cb} {...Flex206IoProps}>
<Flex className="p-atrihome Flex210 bpt" {...Flex210Props} {...Flex210Cb} {...Flex210IoProps}>
<TextBox className="p-atrihome TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
<Flex className="p-atrihome Flex212 bpt" {...Flex212Props} {...Flex212Cb} {...Flex212IoProps}>
<TextBox className="p-atrihome TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex211 bpt" {...Flex211Props} {...Flex211Cb} {...Flex211IoProps}>
<Button className="p-atrihome Button26 bpt" {...Button26Props} {...Button26Cb} {...Button26IoProps}/>
<Button className="p-atrihome Button27 bpt" {...Button27Props} {...Button27Cb} {...Button27IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex207 bpt" {...Flex207Props} {...Flex207Cb} {...Flex207IoProps}>
<Image className="p-atrihome Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex214 bpt" {...Flex214Props} {...Flex214Cb} {...Flex214IoProps}>
<Flex className="p-atrihome Flex215 bpt" {...Flex215Props} {...Flex215Cb} {...Flex215IoProps}>
<TextBox className="p-atrihome TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
<TextBox className="p-atrihome TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
</Flex>
<Flex className="p-atrihome Flex216 bpt" {...Flex216Props} {...Flex216Cb} {...Flex216IoProps}>
<Image className="p-atrihome Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
<Flex className="p-atrihome Flex218 bpt" {...Flex218Props} {...Flex218Cb} {...Flex218IoProps}>
<Flex className="p-atrihome Flex221 bpt" {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<Image className="p-atrihome Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
<Image className="p-atrihome Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
<Image className="p-atrihome Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
<Image className="p-atrihome Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
<Image className="p-atrihome Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Flex>
<TextBox className="p-atrihome TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox className="p-atrihome TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<Flex className="p-atrihome Flex222 bpt" {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<Image className="p-atrihome Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
<TextBox className="p-atrihome TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
</Flex>
</Flex>
<Image className="p-atrihome Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
</Flex>
<Flex className="p-atrihome Flex223 bpt" {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<Button className="p-atrihome Button28 bpt" {...Button28Props} {...Button28Cb} {...Button28IoProps}/>
<Button className="p-atrihome Button29 bpt" {...Button29Props} {...Button29Cb} {...Button29IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Flex className="p-atrihome Flex225 bpt" {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<TextBox className="p-atrihome TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<Button className="p-atrihome Button30 bpt" {...Button30Props} {...Button30Cb} {...Button30IoProps}/>
</Flex>
<Flex className="p-atrihome Flex226 bpt" {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<Flex className="p-atrihome Flex227 bpt" {...Flex227Props} {...Flex227Cb} {...Flex227IoProps}>
<Image className="p-atrihome Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
<TextBox className="p-atrihome TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<TextBox className="p-atrihome TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
<TextBox className="p-atrihome TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
</Flex>
<Flex className="p-atrihome Flex228 bpt" {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<Flex className="p-atrihome Flex229 bpt" {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Flex className="p-atrihome Flex231 bpt" {...Flex231Props} {...Flex231Cb} {...Flex231IoProps}>
<Image className="p-atrihome Image97 bpt" {...Image97Props} {...Image97Cb} {...Image97IoProps}/>
<TextBox className="p-atrihome TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox className="p-atrihome TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
</Flex>
<Flex className="p-atrihome Flex232 bpt" {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<Flex className="p-atrihome Flex235 bpt" {...Flex235Props} {...Flex235Cb} {...Flex235IoProps}>
<Image className="p-atrihome Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
<TextBox className="p-atrihome TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
<TextBox className="p-atrihome TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex230 bpt" {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<Flex className="p-atrihome Flex233 bpt" {...Flex233Props} {...Flex233Cb} {...Flex233IoProps}>
<Flex className="p-atrihome Flex236 bpt" {...Flex236Props} {...Flex236Cb} {...Flex236IoProps}>
<Image className="p-atrihome Image99 bpt" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
<TextBox className="p-atrihome TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
<TextBox className="p-atrihome TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex234 bpt" {...Flex234Props} {...Flex234Cb} {...Flex234IoProps}>
<Flex className="p-atrihome Flex237 bpt" {...Flex237Props} {...Flex237Cb} {...Flex237IoProps}>
<Image className="p-atrihome Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
<TextBox className="p-atrihome TextBox232 bpt" {...TextBox232Props} {...TextBox232Cb} {...TextBox232IoProps}/>
<TextBox className="p-atrihome TextBox231 bpt" {...TextBox231Props} {...TextBox231Cb} {...TextBox231IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex238 bpt" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<Flex className="p-atrihome Flex239 bpt" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<Flex className="p-atrihome Flex259 bpt" {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}>
<TextBox className="p-atrihome TextBox244 bpt" {...TextBox244Props} {...TextBox244Cb} {...TextBox244IoProps}/>
<TextBox className="p-atrihome TextBox245 bpt" {...TextBox245Props} {...TextBox245Cb} {...TextBox245IoProps}/>
<Flex className="p-atrihome Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<Flex className="p-atrihome Flex255 bpt" {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<Flex className="p-atrihome Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<Image className="p-atrihome Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
</Flex>
</Flex>
<TextBox className="p-atrihome TextBox243 bpt" {...TextBox243Props} {...TextBox243Cb} {...TextBox243IoProps}/>
</Flex>
<Flex className="p-atrihome Flex257 bpt" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<Image className="p-atrihome Image109 bpt" {...Image109Props} {...Image109Cb} {...Image109IoProps}/>
<TextBox className="p-atrihome TextBox242 bpt" {...TextBox242Props} {...TextBox242Cb} {...TextBox242IoProps}/>
</Flex>
<Flex className="p-atrihome Flex256 bpt" {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<Image className="p-atrihome Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
<TextBox className="p-atrihome TextBox241 bpt" {...TextBox241Props} {...TextBox241Cb} {...TextBox241IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex240 bpt" {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<Flex className="p-atrihome Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<Flex className="p-atrihome Flex264 bpt" {...Flex264Props} {...Flex264Cb} {...Flex264IoProps}>
<TextBox className="p-atrihome TextBox247 bpt" {...TextBox247Props} {...TextBox247Cb} {...TextBox247IoProps}/>
<Input className="p-atrihome Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Flex>
<Flex className="p-atrihome Flex265 bpt" {...Flex265Props} {...Flex265Cb} {...Flex265IoProps}>
<Flex className="p-atrihome Flex270 bpt" {...Flex270Props} {...Flex270Cb} {...Flex270IoProps}>
<TextBox className="p-atrihome TextBox252 bpt" {...TextBox252Props} {...TextBox252Cb} {...TextBox252IoProps}/>
<Input className="p-atrihome Input6 bpt" {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Flex className="p-atrihome Flex266 bpt" {...Flex266Props} {...Flex266Cb} {...Flex266IoProps}>
<Flex className="p-atrihome Flex271 bpt" {...Flex271Props} {...Flex271Cb} {...Flex271IoProps}>
<TextBox className="p-atrihome TextBox253 bpt" {...TextBox253Props} {...TextBox253Cb} {...TextBox253IoProps}/>
<Input className="p-atrihome Input7 bpt" {...Input7Props} {...Input7Cb} {...Input7IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex267 bpt" {...Flex267Props} {...Flex267Cb} {...Flex267IoProps}>
<Flex className="p-atrihome Flex272 bpt" {...Flex272Props} {...Flex272Cb} {...Flex272IoProps}>
<TextBox className="p-atrihome TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
<Input className="p-atrihome Input8 bpt" {...Input8Props} {...Input8Cb} {...Input8IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex263 bpt" {...Flex263Props} {...Flex263Cb} {...Flex263IoProps}>
<Flex className="p-atrihome Flex268 bpt" {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}>
<Flex className="p-atrihome Flex273 bpt" {...Flex273Props} {...Flex273Cb} {...Flex273IoProps}>
<TextBox className="p-atrihome TextBox255 bpt" {...TextBox255Props} {...TextBox255Cb} {...TextBox255IoProps}/>
<Input className="p-atrihome Input9 bpt" {...Input9Props} {...Input9Cb} {...Input9IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex269 bpt" {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<Flex className="p-atrihome Flex274 bpt" {...Flex274Props} {...Flex274Cb} {...Flex274IoProps}>
<TextBox className="p-atrihome TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
<Input className="p-atrihome Input10 bpt" {...Input10Props} {...Input10Cb} {...Input10IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex260 bpt" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<Flex className="p-atrihome Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<TextBox className="p-atrihome TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
<Input className="p-atrihome Input11 bpt" {...Input11Props} {...Input11Cb} {...Input11IoProps}/>
<Button className="p-atrihome Button31 bpt" {...Button31Props} {...Button31Cb} {...Button31IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Flex className="p-atrihome Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<TextBox className="p-atrihome TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
<Button className="p-atrihome Button32 bpt" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
</Flex>
<Flex className="p-atrihome Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<Flex className="p-atrihome Flex279 bpt" {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<Image className="p-atrihome Image110 bpt" {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
</Flex>
<Flex className="p-atrihome Flex281 bpt" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<Image className="p-atrihome Image111 bpt" {...Image111Props} {...Image111Cb} {...Image111IoProps}/>
</Flex>
<Flex className="p-atrihome Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<Flex className="p-atrihome Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Flex className="p-atrihome Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Image className="p-atrihome Image112 bpt" {...Image112Props} {...Image112Cb} {...Image112IoProps}/>
</Flex>
<Flex className="p-atrihome Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<Image className="p-atrihome Image113 bpt" {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<Flex className="p-atrihome Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<Image className="p-atrihome Image114 bpt" {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
</Flex>
<Flex className="p-atrihome Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<Image className="p-atrihome Image115 bpt" {...Image115Props} {...Image115Cb} {...Image115IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<Flex className="p-atrihome Flex289 bpt" {...Flex289Props} {...Flex289Cb} {...Flex289IoProps}>
<Image className="p-atrihome Image120 bpt" {...Image120Props} {...Image120Cb} {...Image120IoProps}/>
<TextBox className="p-atrihome TextBox260 bpt" {...TextBox260Props} {...TextBox260Cb} {...TextBox260IoProps}/>
<Flex className="p-atrihome Flex299 bpt" {...Flex299Props} {...Flex299Cb} {...Flex299IoProps}>
<Flex className="p-atrihome Flex300 bpt" {...Flex300Props} {...Flex300Cb} {...Flex300IoProps}>
<Image className="p-atrihome Image125 bpt" {...Image125Props} {...Image125Cb} {...Image125IoProps}/>
<Image className="p-atrihome Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
<Image className="p-atrihome Image123 bpt" {...Image123Props} {...Image123Cb} {...Image123IoProps}/>
<Image className="p-atrihome Image122 bpt" {...Image122Props} {...Image122Cb} {...Image122IoProps}/>
<Image className="p-atrihome Image121 bpt" {...Image121Props} {...Image121Cb} {...Image121IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex291 bpt" {...Flex291Props} {...Flex291Cb} {...Flex291IoProps}>
<Flex className="p-atrihome Flex301 bpt" {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}>
<TextBox className="p-atrihome TextBox262 bpt" {...TextBox262Props} {...TextBox262Cb} {...TextBox262IoProps}/>
<TextBox className="p-atrihome TextBox264 bpt" {...TextBox264Props} {...TextBox264Cb} {...TextBox264IoProps}/>
<TextBox className="p-atrihome TextBox267 bpt" {...TextBox267Props} {...TextBox267Cb} {...TextBox267IoProps}/>
<TextBox className="p-atrihome TextBox268 bpt" {...TextBox268Props} {...TextBox268Cb} {...TextBox268IoProps}/>
<TextBox className="p-atrihome TextBox266 bpt" {...TextBox266Props} {...TextBox266Cb} {...TextBox266IoProps}/>
<TextBox className="p-atrihome TextBox265 bpt" {...TextBox265Props} {...TextBox265Cb} {...TextBox265IoProps}/>
<TextBox className="p-atrihome TextBox263 bpt" {...TextBox263Props} {...TextBox263Cb} {...TextBox263IoProps}/>
<TextBox className="p-atrihome TextBox261 bpt" {...TextBox261Props} {...TextBox261Cb} {...TextBox261IoProps}/>
</Flex>
<Flex className="p-atrihome Flex302 bpt" {...Flex302Props} {...Flex302Cb} {...Flex302IoProps}>
<Flex className="p-atrihome Flex303 bpt" {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<TextBox className="p-atrihome TextBox275 bpt" {...TextBox275Props} {...TextBox275Cb} {...TextBox275IoProps}/>
<TextBox className="p-atrihome TextBox273 bpt" {...TextBox273Props} {...TextBox273Cb} {...TextBox273IoProps}/>
<TextBox className="p-atrihome TextBox270 bpt" {...TextBox270Props} {...TextBox270Cb} {...TextBox270IoProps}/>
<TextBox className="p-atrihome TextBox269 bpt" {...TextBox269Props} {...TextBox269Cb} {...TextBox269IoProps}/>
<TextBox className="p-atrihome TextBox271 bpt" {...TextBox271Props} {...TextBox271Cb} {...TextBox271IoProps}/>
<TextBox className="p-atrihome TextBox272 bpt" {...TextBox272Props} {...TextBox272Cb} {...TextBox272IoProps}/>
<TextBox className="p-atrihome TextBox274 bpt" {...TextBox274Props} {...TextBox274Cb} {...TextBox274IoProps}/>
<TextBox className="p-atrihome TextBox276 bpt" {...TextBox276Props} {...TextBox276Cb} {...TextBox276IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-atrihome Flex290 bpt" {...Flex290Props} {...Flex290Cb} {...Flex290IoProps}>
<TextBox className="p-atrihome TextBox259 bpt" {...TextBox259Props} {...TextBox259Cb} {...TextBox259IoProps}/>
<Flex className="p-atrihome Flex298 bpt" {...Flex298Props} {...Flex298Cb} {...Flex298IoProps}>
<Flex className="p-atrihome Flex297 bpt" {...Flex297Props} {...Flex297Cb} {...Flex297IoProps}>
<Flex className="p-atrihome Flex295 bpt" {...Flex295Props} {...Flex295Cb} {...Flex295IoProps}>
<Image className="p-atrihome Image119 bpt" {...Image119Props} {...Image119Cb} {...Image119IoProps}/>
</Flex>
<Flex className="p-atrihome Flex294 bpt" {...Flex294Props} {...Flex294Cb} {...Flex294IoProps}>
<Image className="p-atrihome Image118 bpt" {...Image118Props} {...Image118Cb} {...Image118IoProps}/>
</Flex>
</Flex>
<Flex className="p-atrihome Flex296 bpt" {...Flex296Props} {...Flex296Cb} {...Flex296IoProps}>
<Flex className="p-atrihome Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<Image className="p-atrihome Image117 bpt" {...Image117Props} {...Image117Cb} {...Image117IoProps}/>
</Flex>
<Flex className="p-atrihome Flex292 bpt" {...Flex292Props} {...Flex292Cb} {...Flex292IoProps}>
<Image className="p-atrihome Image116 bpt" {...Image116Props} {...Image116Cb} {...Image116IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
