import { Center, Divider, Slider, Stack, Text, Title } from "@mantine/core";
import { IconHeart } from "@tabler/icons";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
  const [healthVal, setHealthVal] = useState(50);
  const [selectedVal, setSelectedVal] = useState();
  const [illnessMsg, setIllnessMsg] = useState({
    header: "",
    content: "",
  });

  useEffect(() => {
    if (selectedVal === 0) {
      setIllnessMsg({
        header: "🏥 🚨 🚑",
        content: "Dostum Sen Hiç iyi değilsin. Biri ambulansı arasın!",
      });
    }
    if (selectedVal === 25) {
      setIllnessMsg({
        header: "🧑🏻‍⚕️ 💊",
        content: "Geçmiş olsun. Bi doktora görün geçer.",
      });
    }
    if (selectedVal === 50) {
      setIllnessMsg({
        header: " 👣 🌲 👻",
        content: "İyisin iyi naz yapıyorsun. Kalk bi dolaş hava al.",
      });
    }
    if (selectedVal === 75) {
      setIllnessMsg({
        header: "🕺🏼 🤲🏻 🍕",
        content: "Hiçbişiyin yok gayet iyisin şükret.",
      });
    }
    if (selectedVal === 100) {
      setIllnessMsg({
        header: "🥳",
        content: "Şurup gibiyim şurup , Turp gibiyim turp turp.",
      });
    }
  }, [selectedVal]);

  const marks = [
    { value: 0, label: "🤮" },
    { value: 25, label: "🙁" },
    { value: 50, label: "🙂" },
    { value: 75, label: "😄" },
    { value: 100, label: "🤩" },
  ];

  return (
    <div className="App">
      <h1>👨🏻‍⚕️</h1>
      <Text italic>"-Merhaba ben doktor fatih"</Text>
      <h2>Lütfen kendinizi ne kadar iyi hissettiğinizi seçin</h2>
      <Slider
        marks={marks}
        mt="2em"
        thumbChildren={<IconHeart size={16} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={24}
        labelAlwaysOn
        value={healthVal}
        onChange={setHealthVal}
        onChangeEnd={setSelectedVal}
        step={25}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
      />
      {illnessMsg?.header && (
        <Stack mt="18%">
          <Divider />
          <Title order={1}> {illnessMsg.header} </Title>
          <Text size={16}>{illnessMsg.content}</Text>
          {selectedVal === 100 && (
            <Center>
              <ReactPlayer
                url={"https://www.youtube.com/embed/wvQDIL5BrBY?t=20"}
                playing={true}
                width="200"
                height="150"
              />
            </Center>
          )}
          {selectedVal === 0 && (
            <Center>
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=LQ3Ini-aOe4"}
                playing={true}
                width="200"
                height="150"
                borderWidth="0"
              />
            </Center>
          )}
        </Stack>
      )}
    </div>
  );
}

export default App;
