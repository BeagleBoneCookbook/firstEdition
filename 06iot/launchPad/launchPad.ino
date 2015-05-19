/*
  Tests connection to a BeagleBone
  Mark A. Yoder
  Waits for input on Serial Port
  g - Green toggle
  r - Red toggle
*/
char inChar = 0; // incoming serial byte
int red = 0;
int green = 0;

void setup()
{
  // initialize the digital pin as an output.
  pinMode(RED_LED, OUTPUT);           // <1>
  pinMode(GREEN_LED, OUTPUT);  
  // start serial port at 9600 bps:
  Serial.begin(9600);                 // <2>
  Serial.print("Command (r, g): ");   // <3>
  
  digitalWrite(GREEN_LED, green);     // <4>
  digitalWrite(  RED_LED, red);
}

void loop()
{
  if(Serial.available() > 0 ) {       // <5>
    inChar = Serial.read();
    switch(inChar) {                  // <6>
      case 'g':
        green = ~green;
        digitalWrite(GREEN_LED, green);
        Serial.println("Green");
        break;
      case 'r':
        red = ~red;
        digitalWrite(RED_LED, red);
        Serial.println("Red");
        break;
    }
    Serial.print("Command (r, g): ");
  }
}

