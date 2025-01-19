precision mediump float;

uniform float u_time;
varying vec3 vPosition;
uniform vec2 u_mouse;
varying vec2 vUv;

void main() {
	// vertical line --> gl_FragColor = vec4(vec3(step(0.99 , 1.0 - abs(vUv.x - 0.5))),1.0);
	// circle --> gl_FragColor = vec4(vec3(step(0.4 , length(vUv - 0.5))),1.0);

	gl_FragColor = vec4(vec3(step(0.4 , length(vUv - 0.5))),1.0);
}