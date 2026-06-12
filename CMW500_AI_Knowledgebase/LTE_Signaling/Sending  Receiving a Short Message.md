# Sending  Receiving a Short Message

Module: LTE Signaling
Source: c069886654084bb1.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Sending / Receiving a Short Message
Sending / Receiving a Short Message
// ***************************************************************************** 
// Configure support of concatenated SMS.
// ***************************************************************************** 
CONFigure:LTE:SIGN:SMS:OUTGoing:LHANdling MSMS
// ***************************************************************************** 
// Configure outgoing messages directly:
// ASCII message text, binary message contents, TP-PID, data coding,
// user data header, coding group, message class, 
// SC address, originating address, service center time stamp.
// Send the message and query whether the transmission was successful.
// *****************************************************************************
CONFigure:LTE:SIGN:SMS:OUTGoing:MESHandling INTernal
CONFigure:LTE:SIGN:SMS:OUTGoing:INTernal "Testing SMS 012!.#\*%+-/()<>?=;@$,"
CONFigure:LTE:SIGN:SMS:OUTGoing:BINary #H0125498fa3bc8d348
CONFigure:LTE:SIGN:SMS:OUTGoing:PIDentifier #H0
CONFigure:LTE:SIGN:SMS:OUTGoing:DCODing BIT7
CONFigure:LTE:SIGN:SMS:OUTGoing:UDHeader #H050415820000 
CONFigure:LTE:SIGN:SMS:OUTGoing:CGRoup GDCoding
CONFigure:LTE:SIGN:SMS:OUTGoing:MCLass CL2
CONFigure:LTE:SIGN:SMS:OUTGoing:OSADdress '543221'
CONFigure:LTE:SIGN:SMS:OUTGoing:OADDress '3526735'
CONFigure:LTE:SIGN:SMS:OUTGoing:SCTStamp:TSOurce DATE
CONFigure:LTE:SIGN:SMS:OUTGoing:SCTStamp:DATE 15,5,2014
CONFigure:LTE:SIGN:SMS:OUTGoing:SCTStamp:TIME 14,40,50
CALL:LTE:SIGN:PSWitched:ACTion SMS; *OPC?
SENSe:LTE:SIGN:SMS:OUTGoing:INFO:LMSent?
// ***************************************************************************** 
// Reset parameters related to an already received short message.
// Wait until a message from the UE has been received.
// Query information about the received message: encoding, message content,
// message length, message segments.
// *****************************************************************************
CLEan:LTE:SIGN:SMS:INComing:INFO:MTEXt
WAITKEY >Send short message from UE<
WHILE SENSe:LTE:SIGN:SMS:INFO:LRMessage:RFLag? <> "OFF"
SENSe:LTE:SIGN:SMS:INComing:INFO:DCODing?
SENSe:LTE:SIGN:INComing:INFO:MTEXt?
SENSe:LTE:SIGN:SMS:INComing:INFO:MLENgth?
SENSe:LTE:SIGN:SMS:INComing:INFO:SEGMent?
// ***************************************************************************** 
// Configure outgoing messages via a file:
// Select message file and query file information.
// *****************************************************************************
CONFigure:LTE:SIGN:SMS:OUTGoing:MESHandling FILE
CONFigure:LTE:SIGN:SMS:OUTGoing:FILE "@USERDATA\sms\LTE\Send\myfile.sms"
CONFigure:LTE:SIGN:SMS:OUTGoing:FILE:INFO?
// ***************************************************************************** 
// Get information about an old received short message:
// Select a message file and query information about it.
// *****************************************************************************
CONFigure:LTE:SIGN:SMS:INComing:FILE "@USERDATA\sms\LTE\Received\rx_001.sms"
CONFigure:LTE:SIGN:SMS:INComing:FILE:INFO?
Top