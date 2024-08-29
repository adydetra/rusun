import { useState, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Text, Html, useGLTF } from '@react-three/drei';
import { useClickAway } from '@uidotdev/usehooks';

export default function Steps() {
  const table = useGLTF('/textures/modern_coffee_table_01_2k/modern_coffee_table_01_2k.gltf');
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const popupRef = useRef(null);

  // Function to close popup
  const closePopup = () => {
    setClicked(false);
  };

  // Handle click outside the popup to close it
  useClickAway(popupRef, closePopup);

  return (
    <>
      {/* Small steps */}
      {/* <RigidBody type="fixed" position={[0, -0.9, 5]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.2, 0.2]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 6]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.2, 0.2]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 7]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.2, 0.2]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 8]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.2, 0.2]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 11]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.2, 4]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody> */}

      {/* Meja */}
      <RigidBody type="fixed" position={[0, 0.1, 25]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={() => setClicked(!clicked)}>
        <primitive object={table.scene} scale={2.5} rotation={[0, Math.PI / 2, 0]} />

        {/* Tombol di atas meja */}
        <mesh position={[0, 1.5, 0]}>
          {/* <circleGeometry args={[0.4, 32]} />
          <meshStandardMaterial color={hovered ? 'orange' : 'lightblue'} /> */}

          {/* Text atau Icon */}
          <Html center>
            <div style={{ color: 'white', fontSize: '24px', textAlign: 'center', position: 'relative' }}>{hovered ? '🪑 Meja' : '🪑'}</div>
          </Html>
        </mesh>
      </RigidBody>

      {/* Popup ketika di-click */}
      {clicked && (
        <Html position={[0, 3, 25]} center>
          <div
            ref={popupRef}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '300px',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <h2>Meja</h2>
            <p>Ini adalah deskripsi meja yang terbuat dari bahan berkualitas tinggi.</p>
            <button
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              X
            </button>
          </div>
        </Html>
      )}

      {/* Luar rumah */}
      <RigidBody type="fixed" position={[0, -1, 15]}>
        <mesh receiveShadow>
          <boxGeometry args={[11.45, 0.1, 11.45]} />
          <meshStandardMaterial color={'gray'} />
        </mesh>
      </RigidBody>

      <Text rotation={[0, Math.PI, 0]} position={[0, 10, 25]} color="black" fontSize={3}>
        Dewa House
      </Text>

      {/* Tangga */}
      <RigidBody type="fixed" position={[0, -0.9, 17.5]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.1, 4]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 18.5]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 0.5, 4]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 19.5]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 1, 4]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, -0.9, 20.5]}>
        <mesh receiveShadow>
          <boxGeometry args={[4, 1.5, 4]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>

      {/* Tangga Rumah */}
      <RigidBody type="fixed" position={[3.8, 0.2, 21.75]}>
        <mesh receiveShadow>
          <boxGeometry args={[1, 0.5, 1]} />
          <meshStandardMaterial color={'gray'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[3.8, 0.2, 22.75]}>
        <mesh receiveShadow>
          <boxGeometry args={[1, 1.5, 1]} />
          <meshStandardMaterial color={'gray'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[3.8, 0.2, 23.75]}>
        <mesh receiveShadow>
          <boxGeometry args={[1, 2.5, 1]} />
          <meshStandardMaterial color={'gray'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[3.8, 0.2, 24.75]}>
        <mesh receiveShadow>
          <boxGeometry args={[1, 3.5, 1]} />
          <meshStandardMaterial color={'gray'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[3.8, 0.2, 25.75]}>
        <mesh receiveShadow>
          <boxGeometry args={[1, 4.5, 1]} />
          <meshStandardMaterial color={'gray'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[3.8, 0.2, 26.75]}>
        <mesh receiveShadow>
          <boxGeometry args={[1, 5.5, 1]} />
          <meshStandardMaterial color={'gray'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[3.8, 0.1, 27.75]}>
        <mesh receiveShadow>
          <boxGeometry args={[1, 6.5, 1]} />
          <meshStandardMaterial color={'gray'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[3.8, 0.2, 28.75]}>
        <mesh receiveShadow>
          <boxGeometry args={[1, 7, 1]} />
          <meshStandardMaterial color={'gray'} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" position={[0, -0.9, 25]}>
        <mesh receiveShadow>
          <boxGeometry args={[10, 2, 10]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, 0.1, 25]}>
        <mesh receiveShadow>
          <boxGeometry args={[6, 0.1, 6]} />
          <meshStandardMaterial color={'yellow'} />
        </mesh>
      </RigidBody>

      {/* Tembok */}
      <RigidBody type="fixed" position={[3, -0.9, 20]}>
        <mesh receiveShadow>
          <boxGeometry args={[3, 10, 1.5]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[-3, -0.9, 20]}>
        <mesh receiveShadow>
          <boxGeometry args={[3, 10, 1.5]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" position={[0, -0.9, 30]}>
        <mesh receiveShadow>
          <boxGeometry args={[10, 10, 1.5]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[5, -0.9, 25]}>
        <mesh receiveShadow>
          <boxGeometry args={[1.5, 10, 10]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[-5, -0.9, 25]}>
        <mesh receiveShadow>
          <boxGeometry args={[1.5, 10, 10]} />
          <meshStandardMaterial color={'lightblue'} />
        </mesh>
      </RigidBody>
    </>
  );
}
