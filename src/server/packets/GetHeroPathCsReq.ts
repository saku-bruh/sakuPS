import { GetHeroPathCsReq, GetHeroPathScRsp } from "../../data/proto/StarRail";
import Packet from "../kcp/Packet";
import Session from "../kcp/Session";

export default async function handle(session: Session, packet: Packet) {
    const body = packet.body as GetHeroPathCsReq;

    session.send("GetHeroPathScRsp", {
        retcode: 0,
        heroPathList: []
    } as GetHeroPathScRsp);
}