export interface DataStructure {
    channel_id: number;
    modulation: string[];
    plc_frequency: number;
    cmcorrcw: string[];
    cmuncorrcw: string[];
    traffic_per_profile: string[];
    start_frequency: string;
    end_frequency: string;
    cmtotalcw: string[];
    modem_efficiency: string;
    traffic_per_last_poll: string[];
}
  
 